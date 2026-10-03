/**
 * Runs inline in <head> before the first paint (see app/layout.tsx), so a dark page never
 * flashes light. Plain module (no "use client") so the server layout can inline it.
 * Keep in sync with themeStore in lib/settings.ts (key "nihongo:theme", values light/dark/system).
 */
export const THEME_BOOT_SCRIPT = `try{var t=JSON.parse(localStorage.getItem("nihongo:theme")||'"system"');if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}`;
