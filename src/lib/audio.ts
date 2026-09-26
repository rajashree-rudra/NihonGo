"use client";

import type { CharItem } from "@/data/types";
import { audioKey, speechText } from "@/data/speech";
import { soundStore } from "./settings";

// ---------- Pronunciation ----------
// Prefers the pre-generated neural voice clips (public/audio); falls back to the
// best Japanese voice the browser offers if a clip is missing.

const clips = new Map<string, HTMLAudioElement>();
const missing = new Set<string>();
let playing: HTMLAudioElement | null = null;

function bestJapaneseVoice(): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis?.getVoices().filter((v) => v.lang.replace("_", "-").startsWith("ja")) ?? [];
  const rank = (v: SpeechSynthesisVoice) =>
    /natural|neural|online/i.test(v.name) ? 3 : /nanami|google/i.test(v.name) ? 2 : v.localService ? 0 : 1;
  return voices.sort((a, b) => rank(b) - rank(a))[0];
}

function speakWithBrowser(text: string) {
  const synth = window.speechSynthesis;
  if (!synth) return;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ja-JP";
  u.rate = 0.85;
  const voice = bestJapaneseVoice();
  if (voice) u.voice = voice;
  synth.speak(u);
}

function stopAll() {
  playing?.pause();
  playing = null;
  if (typeof window !== "undefined") window.speechSynthesis?.cancel();
}

// Muting silences anything already playing, not just what comes next.
soundStore.subscribe(() => {
  if (!soundStore.get()) stopAll();
});

/** Speak a character. Does nothing while sound is muted. */
export async function pronounce(item: CharItem) {
  if (typeof window === "undefined" || !soundStore.get()) return;
  stopAll();

  const key = audioKey(item.char);
  if (!missing.has(key)) {
    let clip = clips.get(key);
    if (!clip) {
      clip = new Audio(`/audio/${key}.mp3`);
      clip.preload = "auto";
      clips.set(key, clip);
    }
    try {
      clip.currentTime = 0;
      playing = clip;
      await clip.play();
      return;
    } catch (e) {
      const name = (e as DOMException)?.name;
      // Autoplay blocked (nothing plays until the user interacts) or interrupted by a newer
      // sound / mute: not a missing clip, so don't fall back to the browser voice.
      if (name === "NotAllowedError" || name === "AbortError") return;
      missing.add(key);
    }
  }
  if (soundStore.get()) speakWithBrowser(speechText(item));
}

/** Warm the cache so the first tap on a character is instant. */
export function preloadClips(items: CharItem[]) {
  for (const item of items) {
    const key = audioKey(item.char);
    if (clips.has(key) || missing.has(key)) continue;
    const clip = new Audio(`/audio/${key}.mp3`);
    clip.preload = "auto";
    clip.addEventListener("error", () => missing.add(key), { once: true });
    clips.set(key, clip);
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
