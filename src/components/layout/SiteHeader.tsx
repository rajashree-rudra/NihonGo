"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Volume2, VolumeX } from "lucide-react";
import { soundStore } from "@/lib/settings";
import { IconButton } from "@/components/ui/IconButton";
import { cn } from "@/components/ui/cn";

export function SoundToggle({ className }: { className?: string }) {
  const [sound, setSound] = soundStore.useValue();
  return (
    <IconButton className={className} label={sound ? "Sound on" : "Sound off"} onClick={() => setSound(!sound)}>
      {sound ? <Volume2 className="size-5" /> : <VolumeX className="size-5" />}
    </IconButton>
  );
}

export function SiteHeader() {
  // Practice/test screens have their own top bar; on phones every pixel goes to the writing box.
  const inSession = /\/(practice|test)$/.test(usePathname());
  return (
    <header className={cn("sticky top-0 z-40 border-b border-line/70 bg-paper/80 backdrop-blur-xl", inSession && "max-sm:hidden")}>
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:h-16">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-xl bg-shu font-brush text-lg font-semibold text-white shadow-[0_6px_16px_-6px_rgb(216_69_46/0.8)] transition-transform group-hover:-rotate-6">
            日
          </span>
          <span className="text-[17px] font-extrabold tracking-tight">
            Nihon<span className="text-shu">Go</span>
          </span>
        </Link>
        <SoundToggle />
      </div>
    </header>
  );
}
