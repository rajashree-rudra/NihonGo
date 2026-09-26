import Link from "next/link";
import { ArrowRight, AudioLines, Lock, PenLine, Target } from "lucide-react";
import { LEVELS } from "@/data/levels";
import { cn } from "@/components/ui/cn";

const LEVEL_KANJI: Record<string, string> = { n5: "五", n4: "四", n3: "三", n2: "二", n1: "一" };

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-5">
      <section className="relative pb-10 pt-14 text-center sm:pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-4 select-none font-brush text-[9rem] leading-none text-ink/[0.035] sm:text-[15rem]"
        >
          日本語
        </div>
        <p className="relative mx-auto inline-flex items-center gap-2 rounded-full border border-line bg-card/80 px-3.5 py-1.5 text-[13px] font-medium text-ink-soft shadow-soft">
          <span className="font-jp text-shu">日本語を学ぼう</span>
          <span className="h-3 w-px bg-line-strong" />
          Let&apos;s learn Japanese
        </p>
        <h1 className="relative mx-auto mt-6 max-w-2xl text-balance text-4xl font-extrabold tracking-tight sm:text-6xl">
          Which level do you want to learn?
        </h1>
        <p className="relative mx-auto mt-5 max-w-xl text-pretty text-base text-ink-soft sm:text-lg">
          Pick your JLPT level. Hear every character in a natural native voice and learn to write it stroke by stroke.
        </p>
      </section>

      <section aria-label="JLPT levels" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {LEVELS.map((level, i) => {
          const open = level.status === "available";
          const body = (
            <>
              <span
                aria-hidden
                className={cn(
                  "pointer-events-none absolute -bottom-6 -right-3 font-brush text-[8.5rem] leading-none transition-transform duration-500",
                  open ? "text-white/[0.08] group-hover:-translate-y-1 group-hover:scale-105" : "text-ink/[0.04]",
                )}
              >
                {LEVEL_KANJI[level.id]}
              </span>
              <div className="flex items-center justify-between">
                <span className={cn("text-[11px] font-bold uppercase tracking-[0.18em]", open ? "text-white/60" : "text-muted")}>JLPT</span>
                {open ? (
                  <span className="rounded-full bg-shu px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">Start here</span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-ink/6 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-muted">
                    <Lock className="size-3" /> Soon
                  </span>
                )}
              </div>
              <div className={cn("mt-8 text-6xl font-extrabold tracking-tight", open ? "text-white" : "text-ink/35")}>{level.title}</div>
              <div className={cn("mt-1 font-semibold", open ? "text-white" : "text-ink-soft")}>{level.tagline}</div>
              <p className={cn("mt-2 text-sm leading-relaxed", open ? "text-white/70" : "text-muted")}>{level.description}</p>
              <div className={cn("mt-auto flex items-center gap-1.5 pt-8 text-sm font-semibold", open ? "text-white" : "text-muted")}>
                {open ? (
                  <>
                    Start learning <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </>
                ) : (
                  "Coming soon"
                )}
              </div>
            </>
          );
          const base = "group relative flex min-h-72 flex-col overflow-hidden rounded-3xl p-6 animate-fade-up";
          const style = { animationDelay: `${i * 70}ms` };
          return open ? (
            <Link
              key={level.id}
              href={`/${level.id}`}
              style={style}
              className={cn(
                base,
                "bg-ink shadow-lift ring-1 ring-ink transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgb(29_26_23/0.55)]",
              )}
            >
              <div className="pointer-events-none absolute -left-10 -top-10 size-40 rounded-full bg-shu/40 blur-3xl" />
              {body}
            </Link>
          ) : (
            <div key={level.id} style={style} aria-disabled className={cn(base, "border border-dashed border-line-strong bg-card/60")}>
              {body}
            </div>
          );
        })}
      </section>

      <section className="mt-16 grid gap-4 sm:grid-cols-3">
        {[
          { icon: AudioLines, title: "Native voice", text: "Tap any character to hear a natural Japanese neural voice." },
          { icon: PenLine, title: "Stroke-by-stroke", text: "Strict mode checks order and direction; easy mode compares your shape." },
          { icon: Target, title: "Test yourself", text: "Randomised tests track what you know and what needs review." },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex gap-4 rounded-2xl border border-line bg-card/70 p-5">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-ink/5 text-ink">
              <Icon className="size-5" />
            </span>
            <div>
              <h3 className="font-bold">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{text}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
