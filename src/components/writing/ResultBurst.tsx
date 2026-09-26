import { cn } from "@/components/ui/cn";

/** Big animated tick (or cross) shown over the writing pad when a character is finished. */
export function ResultBurst({ ok, caption }: { ok: boolean; caption?: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 grid place-items-center rounded-[28px] bg-white/55 backdrop-blur-[1px] animate-fade-up [animation-duration:0.25s]">
      <div className="flex flex-col items-center gap-3">
        <div className="relative">
          <span className={cn("absolute inset-0 rounded-full animate-ping-once", ok ? "bg-matcha" : "bg-shu")} />
          <svg viewBox="0 0 100 100" className="relative size-28 animate-pop sm:size-32" aria-hidden>
            <circle cx="50" cy="50" r="46" fill={ok ? "#3f8a5a" : "#d8452e"} />
            <path
              d={ok ? "M29 52 L44 66 L72 36" : "M35 35 L65 65 M65 35 L35 65"}
              pathLength={1}
              stroke="white"
              strokeWidth={9}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="stroke-draw"
              style={{ ["--delay" as string]: "0.15s", ["--dur" as string]: "0.35s" }}
            />
          </svg>
        </div>
        {caption && <p className={cn("rounded-full px-3 py-1 text-sm font-bold text-white shadow-soft", ok ? "bg-matcha" : "bg-shu")}>{caption}</p>}
      </div>
      <span className="sr-only" role="status">
        {ok ? "Correct" : "Incorrect"}
      </span>
    </div>
  );
}
