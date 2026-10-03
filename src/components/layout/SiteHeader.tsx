"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useSyncExternalStore } from "react";
import { Mars, Moon, Sun, Venus, Volume2, VolumeX } from "lucide-react";
import { soundStore, themeStore, voiceStore, type Voice } from "@/lib/settings";
import { IconButton } from "@/components/ui/IconButton";
import { cn } from "@/components/ui/cn";

export function SoundToggle({ className, size }: { className?: string; size?: string }) {
  const [sound, setSound] = soundStore.useValue();
  return (
    <IconButton size={size} className={className} label={sound ? "Sound on" : "Sound off"} onClick={() => setSound(!sound)}>
      {sound ? <Volume2 className="size-5" /> : <VolumeX className="size-5" />}
    </IconButton>
  );
}

const darkQuery = () => window.matchMedia("(prefers-color-scheme: dark)");
function useSystemDark() {
  return useSyncExternalStore(
    (cb) => {
      const q = darkQuery();
      q.addEventListener("change", cb);
      return () => q.removeEventListener("change", cb);
    },
    () => darkQuery().matches,
    () => false,
  );
}

/** Light / dark switch. Follows the device until the reader picks one; the choice is remembered. */
export function ThemeToggle({ size = "size-10", className }: { size?: string; className?: string }) {
  const [theme, setTheme] = themeStore.useValue();
  const systemDark = useSystemDark();
  const dark = theme === "dark" || (theme === "system" && systemDark);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);
  return (
    <IconButton size={size} className={className} label={dark ? "Light mode" : "Dark mode"} onClick={() => setTheme(dark ? "light" : "dark")}>
      {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </IconButton>
  );
}

const VOICES: { id: Voice; label: string; Icon: typeof Venus }[] = [
  { id: "female", label: "Female", Icon: Venus },
  { id: "male", label: "Male", Icon: Mars },
];

/** Female / male voice for every clip in the app (remembered on this device). */
export function VoiceToggle({ compact, className }: { compact?: boolean; className?: string }) {
  const [voice, setVoice] = voiceStore.useValue();
  return (
    <div role="radiogroup" aria-label="Voice" className={cn("inline-flex shrink-0 rounded-xl bg-ink/5 p-0.5", className)}>
      {VOICES.map(({ id, label, Icon }) => {
        const on = voice === id;
        return (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={on}
            aria-label={`${label} voice`}
            title={`${label} voice`}
            onClick={() => setVoice(id)}
            className={cn(
              "inline-flex h-8 items-center justify-center gap-1 rounded-[10px] text-[12px] font-bold transition-all",
              compact ? "w-8" : "w-8 sm:w-auto sm:px-2.5",
              on ? (id === "female" ? "bg-card text-shu shadow-soft" : "bg-card text-ai shadow-soft") : "text-muted hover:text-ink",
            )}
          >
            <Icon className="size-4" strokeWidth={2.4} />
            {!compact && <span className="max-sm:sr-only">{label}</span>}
          </button>
        );
      })}
    </div>
  );
}

export function SiteHeader() {
  // Practice/test screens have their own top bar; on phones every pixel goes to the writing box.
  const inSession = /\/(practice|test)$/.test(usePathname());
  return (
    <header className={cn("sticky top-0 z-40 border-b border-line/70 bg-paper/80 backdrop-blur-xl", inSession && "max-sm:hidden")}>
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:h-16">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-xl bg-shu font-brush text-lg font-semibold text-[#fffdf9] shadow-[0_6px_16px_-6px_rgb(216_69_46/0.8)] transition-transform group-hover:-rotate-6">
            日
          </span>
          <span className="text-[17px] font-extrabold tracking-tight">
            Nihon<span className="text-shu">Go</span>
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <VoiceToggle />
          <ThemeToggle />
          <SoundToggle />
        </div>
      </div>
    </header>
  );
}
