"use client";

import { useEffect } from "react";
import { progressStore } from "@/lib/settings";
import { addActiveSeconds, flush, hasPending, queueLearned } from "@/lib/tracking";
import { readViewer } from "@/lib/viewer";

const TICK = 15; // seconds
const IDLE_AFTER = 2 * 60 * 1000; // no click, key, scroll or touch for 2 minutes → not counted
const FLUSH_EVERY = 2 * 60 * 1000;

const signedInEmail = () => readViewer()?.email ?? null;

/** Not study pages: sign-in, registration and the admin panel. */
const notStudy = (path: string) => path === "/login" || path === "/register" || path.startsWith("/admin");

/**
 * Counts study time — the site is open, in front (visible and focused) and was used in the last 2 minutes —
 * and sends it with newly learned items for the admin panel. Only one tab can have focus, so tabs don't double count.
 */
export function ActivityTracker() {
  useEffect(() => {
    let lastInput = Date.now();
    const onInput = () => (lastInput = Date.now());
    const inputs = ["pointerdown", "keydown", "wheel", "touchstart", "scroll"] as const;
    for (const e of inputs) window.addEventListener(e, onInput, { passive: true, capture: true });

    const tick = setInterval(() => {
      if (!signedInEmail() || notStudy(location.pathname)) return;
      if (document.visibilityState === "visible" && document.hasFocus() && Date.now() - lastInput < IDLE_AFTER) addActiveSeconds(TICK);
    }, TICK * 1000);

    const send = setInterval(() => {
      if (hasPending() && signedInEmail()) void flush();
    }, FLUSH_EVERY);

    const leave = () => {
      if (document.visibilityState === "hidden" && hasPending() && signedInEmail()) void flush(true);
    };
    document.addEventListener("visibilitychange", leave);
    window.addEventListener("pagehide", leave);

    // Once per device: what was learned here before accounts existed goes to the first account signed in.
    // (Only once, so on a shared computer one person's history doesn't land in everyone's account.)
    const UPLOADED = "nihongo:progress-uploaded";
    if (signedInEmail() && !localStorage.getItem(UPLOADED)) {
      localStorage.setItem(UPLOADED, new Date().toISOString());
      for (const [setId, items] of Object.entries(progressStore.get())) for (const item of items) queueLearned(setId, item);
      void flush();
    }

    return () => {
      for (const e of inputs) window.removeEventListener(e, onInput, { capture: true });
      clearInterval(tick);
      clearInterval(send);
      document.removeEventListener("visibilitychange", leave);
      window.removeEventListener("pagehide", leave);
    };
  }, []);
  return null;
}
