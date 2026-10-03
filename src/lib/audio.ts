"use client";

import type { CharItem } from "@/data/types";
import { audioKey, speechText, textAudioKey } from "@/data/speech";
import { soundStore, voiceStore, type Voice } from "./settings";

// ---------- Pronunciation ----------
// Prefers the pre-generated neural voice clips; falls back to the best Japanese voice the
// browser offers if a clip is missing.
//
// Clips live in public/audio (female) and public/audio/male. Production serves them from
// GitHub Pages (NEXT_PUBLIC_AUDIO_BASE, set by the deploy workflow) to stay within the free
// Vercel plan; locally they come from /audio.
const AUDIO_BASE = (process.env.NEXT_PUBLIC_AUDIO_BASE || "/audio").replace(/\/$/, "");
const baseFor = (voice: Voice) => (voice === "male" ? `${AUDIO_BASE}/male` : AUDIO_BASE);
/** The chosen voice first; the female set (the most complete) as a fallback. */
const voiceOrder = (): Voice[] => (voiceStore.get() === "male" ? ["male", "female"] : ["female"]);

const clips = new Map<string, HTMLAudioElement>();
const missing = new Set<string>();
let playing: HTMLAudioElement | null = null;

function bestJapaneseVoice(): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis?.getVoices().filter((v) => v.lang.replace("_", "-").startsWith("ja")) ?? [];
  const rank = (v: SpeechSynthesisVoice) =>
    /natural|neural|online/i.test(v.name) ? 3 : /nanami|google/i.test(v.name) ? 2 : v.localService ? 0 : 1;
  return voices.sort((a, b) => rank(b) - rank(a))[0];
}

/** Speak with the browser's own voice; resolves when it finishes (or is cancelled). */
function speakWithBrowser(text: string): Promise<void> {
  const synth = window.speechSynthesis;
  if (!synth) return Promise.resolve();
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ja-JP";
  u.rate = 0.85;
  const voice = bestJapaneseVoice();
  if (voice) u.voice = voice;
  return new Promise((resolve) => {
    u.onend = u.onerror = () => resolve();
    synth.speak(u);
    setTimeout(resolve, 12000); // some browsers never fire "end"
  });
}

/** Bumped on every new sound or stop, so a slow fetch can't start playing a stale clip. */
let token = 0;

function stopAll() {
  token++;
  playing?.pause();
  playing = null;
  if (typeof window !== "undefined") window.speechSynthesis?.cancel();
}

// Muting silences anything already playing, not just what comes next.
soundStore.subscribe(() => {
  if (!soundStore.get()) stopAll();
});
voiceStore.subscribe(stopAll);

/** Speak a character. Does nothing while sound is muted. */
export function pronounce(item: CharItem) {
  return play(audioKey(item.char), speechText(item));
}

// ---------- Words & sentences: packed clips ----------
// scripts/generate-audio.mjs concatenates word/sentence clips into a few "pack" files and
// writes index.json (hash → [pack, byte offset, length]). A clip is fetched with an HTTP
// Range request and played from a Blob URL.

interface PackIndex {
  packs: string[];
  clips: Record<string, [pack: number, offset: number, length: number]>;
}

const packIndexes = new Map<Voice, Promise<PackIndex | null>>();
const textUrls = new Map<string, Promise<string | null>>();

function loadPackIndex(voice: Voice) {
  let index = packIndexes.get(voice);
  if (!index) {
    index = fetch(`${baseFor(voice)}/packs/index.json`)
      .then((r) => (r.ok ? (r.json() as Promise<PackIndex>) : null))
      .catch(() => null);
    packIndexes.set(voice, index);
  }
  return index;
}

/** Fetch the index ahead of time so the first tap plays quickly. */
export function warmTextAudio() {
  if (typeof window !== "undefined") void loadPackIndex(voiceStore.get());
}

async function textClipUrl(hash: string): Promise<string | null> {
  for (const voice of voiceOrder()) {
    const url = await voiceClipUrl(voice, hash);
    if (url) return url;
  }
  return null;
}

function voiceClipUrl(voice: Voice, hash: string): Promise<string | null> {
  const key = `${voice}:${hash}`;
  let url = textUrls.get(key);
  if (!url) {
    url = (async () => {
      const index = await loadPackIndex(voice);
      const entry = index?.clips[hash];
      if (!entry) return null;
      const [pack, offset, length] = entry;
      const res = await fetch(`${baseFor(voice)}/packs/${index.packs[pack]}`, { headers: { Range: `bytes=${offset}-${offset + length - 1}` } });
      if (!res.ok) return null;
      let bytes = await res.arrayBuffer();
      // A server that ignores Range sends the whole pack — cut the clip out ourselves.
      if (res.status === 200) bytes = bytes.slice(offset, offset + length);
      return URL.createObjectURL(new Blob([bytes], { type: "audio/mpeg" }));
    })().catch(() => null);
    url.then((u) => u === null && textUrls.delete(key));
    textUrls.set(key, url);
  }
  return url;
}

// One shared element for packed clips. iOS only lets script start audio on an element that
// has already played during a tap, so it is "unlocked" with silence on the first touch.
let textPlayer: HTMLAudioElement | null = null;
const SILENCE = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA=";
function sharedPlayer() {
  textPlayer ??= new Audio();
  return textPlayer;
}
if (typeof window !== "undefined") {
  // Only while sound is on, so a muted app never touches the audio element.
  const unlock = () => {
    if (!soundStore.get()) return;
    window.removeEventListener("pointerdown", unlock, true);
    const p = sharedPlayer();
    if (p.src) return;
    p.src = SILENCE;
    p.play().catch(() => {});
  };
  window.addEventListener("pointerdown", unlock, true);
}

/** Speak any Japanese text (a word or sentence) from its pre-generated clip. */
export async function speak(text: string) {
  if (typeof window === "undefined" || !soundStore.get()) return;
  stopAll();
  await playText(text, token);
}

/** Play one word/sentence clip as part of the sound `mine`; resolves when it has finished. */
async function playText(text: string, mine: number, ready?: Promise<string | null>): Promise<void> {
  const url = await (ready ?? textClipUrl(textAudioKey(text).slice(2)));
  if (mine !== token || !soundStore.get()) return;
  if (!url) return speakWithBrowser(text);
  const p = sharedPlayer();
  p.src = url;
  playing = p;
  const done = new Promise<void>((resolve) => {
    p.onended = p.onpause = p.onerror = () => resolve();
  });
  try {
    await p.play();
  } catch (e) {
    const name = (e as DOMException)?.name;
    if (name !== "NotAllowedError" && name !== "AbortError" && mine === token) return speakWithBrowser(text);
    return;
  }
  await done;
}

/**
 * Say pairs of parts back to back, e.g. reading → sentence → reading → sentence, with only a
 * tiny breath inside a pair and a short one between pairs. All clips are fetched up front so
 * nothing waits on the network mid-way. Any other sound, mute or navigation stops the rest.
 */
export async function speakSequence(parts: string[], { inPair = 40, betweenPairs = 160 } = {}) {
  if (typeof window === "undefined" || !soundStore.get() || !parts.length) return;
  stopAll();
  const mine = token;
  const ready = parts.map((t) => textClipUrl(textAudioKey(t).slice(2)));
  for (let i = 0; i < parts.length; i++) {
    if (i) await new Promise((r) => setTimeout(r, i % 2 ? inPair : betweenPairs));
    if (mine !== token || !soundStore.get()) return;
    await playText(parts[i], mine, ready[i]);
  }
}

function charClip(voice: Voice, key: string) {
  const id = `${voice}:${key}`;
  let clip = clips.get(id);
  if (!clip) {
    clip = new Audio(`${baseFor(voice)}/${key}.mp3`);
    clip.preload = "auto";
    clip.addEventListener("error", () => missing.add(id), { once: true });
    clips.set(id, clip);
  }
  return clip;
}

async function play(key: string, fallbackText: string) {
  if (typeof window === "undefined" || !soundStore.get()) return;
  stopAll();
  const mine = token;

  for (const voice of voiceOrder()) {
    if (missing.has(`${voice}:${key}`)) continue;
    const clip = charClip(voice, key);
    try {
      clip.currentTime = 0;
      playing = clip;
      await clip.play();
      return;
    } catch (e) {
      const name = (e as DOMException)?.name;
      // Autoplay blocked (nothing plays until the user interacts) or interrupted by a newer
      // sound / mute: not a missing clip, so don't fall back.
      if (name === "NotAllowedError" || name === "AbortError" || mine !== token) return;
      missing.add(`${voice}:${key}`);
    }
  }
  if (soundStore.get() && mine === token) speakWithBrowser(fallbackText);
}

/** Warm the cache so the first tap on a character is instant. */
export function preloadClips(items: CharItem[]) {
  const voice = voiceStore.get();
  for (const item of items) {
    const key = audioKey(item.char);
    if (!missing.has(`${voice}:${key}`)) charClip(voice, key);
  }
}

// ---------- Feedback sounds (synthesised, no assets) ----------

let ctx: AudioContext | null = null;

function tone(freq: number, at: number, dur: number, type: OscillatorType, vol: number) {
  ctx ??= new AudioContext();
  if (ctx.state === "suspended") void ctx.resume();
  const t = ctx.currentTime + at;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(vol, t + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(gain).connect(ctx.destination);
  osc.start(t);
  osc.stop(t + dur + 0.05);
}

export type Sfx = "stroke" | "wrong" | "success" | "fail";

export function sfx(name: Sfx) {
  if (typeof window === "undefined" || !soundStore.get()) return;
  try {
    switch (name) {
      case "stroke":
        tone(880, 0, 0.14, "sine", 0.12);
        tone(1320, 0.05, 0.16, "sine", 0.07);
        break;
      case "wrong":
        tone(220, 0, 0.18, "triangle", 0.14);
        tone(185, 0.08, 0.2, "triangle", 0.1);
        break;
      case "success":
        [659, 784, 988, 1319].forEach((f, i) => tone(f, i * 0.085, 0.42, "sine", 0.14));
        break;
      case "fail":
        [392, 330, 262].forEach((f, i) => tone(f, i * 0.13, 0.3, "triangle", 0.1));
        break;
    }
  } catch {
    /* audio unavailable */
  }
}
