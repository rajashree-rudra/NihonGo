"use client";

import { useSyncExternalStore } from "react";

/**
 * A tiny localStorage-backed store usable from any component.
 * Server render and first client render use `initial`, so hydration never mismatches.
 */
export function createPersistentStore<T>(key: string, initial: T) {
  let value = initial;
  let loaded = false;
  const listeners = new Set<() => void>();

  const load = () => {
    if (loaded || typeof window === "undefined") return;
    loaded = true;
    try {
      const raw = window.localStorage.getItem(key);
      if (raw !== null) value = JSON.parse(raw) as T;
    } catch {
      /* storage unavailable — keep default */
    }
  };

  const get = () => {
    load();
    return value;
  };

  const set = (next: T | ((prev: T) => T)) => {
    load();
    value = typeof next === "function" ? (next as (p: T) => T)(value) : next;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* ignore */
    }
    listeners.forEach((l) => l());
  };

  const subscribe = (l: () => void) => {
    listeners.add(l);
    return () => listeners.delete(l);
  };

  function useValue(): [T, typeof set] {
    const v = useSyncExternalStore(subscribe, get, () => initial);
    return [v, set];
  }

  return { get, set, subscribe, useValue };
}
