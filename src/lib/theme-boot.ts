/**
 * Runs inline in <head> before the first paint (see app/layout.tsx), so a dark page never
 * flashes light. Plain module (no "use client") so the server layout can inline it.
 * Keep in sync with themeStore in lib/settings.ts (key "nihongo:theme", values light/dark;
 * anything else — including no choice yet — means light).
 */
export const THEME_BOOT_SCRIPT = `try{document.documentElement.dataset.theme=JSON.parse(localStorage.getItem("nihongo:theme"))==="dark"?"dark":"light"}catch(e){document.documentElement.dataset.theme="light"}`;
