import { useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  before: string;
  after: string;
  index: number;
  /** "auto" opens on scroll-into-view; "hover" opens on mouse hover (tap toggles on touch). */
  mode?: "auto" | "hover";
  /** "compact" scales down overlay chrome for narrow grid tiles. */
  size?: "default" | "compact";
};

export function CurtainReveal({
  title,
  before,
  after,
  index,
  mode = "auto",
  size = "default",
}: Props) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.45 });
  const [toggled, setToggled] = useState<boolean | null>(null);
  const autoOpen = mode === "auto" && inView;
  const open = toggled ?? autoOpen;
  const toggle = () => setToggled((t) => !(t ?? autoOpen));
  const compact = size === "compact";
  const chromeText = compact ? { fontSize: "0.6rem" } : undefined;

  const panelBase =
    "curtain-fabric absolute overflow-hidden transition-transform duration-[850ms] ease-editorial will-change-transform motion-reduce:transition-opacity motion-reduce:duration-500";
  const badge = "eyebrow absolute bg-burgundy px-2.5 py-1 text-cream";

  return (
    <div ref={ref} className="group">
      <div
        className={cn(
          "relative w-full cursor-pointer overflow-hidden",
          compact ? "aspect-[4/5]" : "aspect-[4/5] max-h-[85vh] sm:aspect-video",
        )}
        onClick={toggle}
        onPointerEnter={(e) => mode === "hover" && e.pointerType === "mouse" && setToggled(true)}
        onPointerLeave={(e) => mode === "hover" && e.pointerType === "mouse" && setToggled(false)}
        role="img"
        aria-label={`${title}: before and after transformation`}
      >
        {/* AFTER — underneath */}
        <img
          src={after}
          alt={`${title} after fit-out`}
          loading="lazy"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Title + toggle overlaid inside the frame so the tile works on any section background */}
        <div
          className={cn(
            "absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-3",
            compact ? "p-3" : "p-4 sm:p-5",
          )}
        >
          <div className="flex items-baseline gap-2.5 bg-burgundy px-2 py-1 text-cream">
            <span className="eyebrow opacity-60" style={chromeText}>
              0{index + 1}
            </span>
            <h3
              className={cn(
                "font-display font-medium italic",
                compact ? "text-sm" : "text-lg sm:text-xl",
              )}
            >
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
            className={cn(
              "eyebrow shrink-0 border border-cream/40 bg-burgundy/85 text-cream opacity-90 transition-opacity hover:opacity-100",
              compact ? "px-2 py-1" : "px-3 py-1.5",
            )}
            style={chromeText}
            aria-pressed={open}
          >
            {open ? "Show before" : "Show after"}
          </button>
        </div>

        <span
          className={cn(
            badge,
            compact ? "right-3 bottom-3" : "right-4 bottom-4 sm:right-5 sm:bottom-5",
          )}
          style={chromeText}
        >
          After
        </span>

        {/* Curtain panel A (left) */}
        <div
          aria-hidden
          className={cn(
            panelBase,
            "inset-y-0 left-0 h-full w-1/2",
            open && "-translate-x-full motion-reduce:translate-x-0 motion-reduce:opacity-0",
          )}
        >
          <img
            src={before}
            alt=""
            loading="lazy"
            width={1600}
            height={900}
            className="absolute inset-0 h-full w-[200%] max-w-none object-cover opacity-30 mix-blend-multiply saturate-50"
          />
          <span
            className={cn(
              badge,
              compact ? "left-3 bottom-3" : "left-4 bottom-4 sm:left-5 sm:bottom-5",
            )}
            style={chromeText}
          >
            Before
          </span>
        </div>

        {/* Curtain panel B (right) — slightly staggered */}
        <div
          aria-hidden
          className={cn(
            panelBase,
            "inset-y-0 right-0 h-full w-1/2 delay-100",
            open && "translate-x-full motion-reduce:translate-x-0 motion-reduce:opacity-0",
          )}
        >
          <img
            src={before}
            alt=""
            loading="lazy"
            width={1600}
            height={900}
            className="absolute top-0 right-0 h-full w-[200%] max-w-none object-cover opacity-30 mix-blend-multiply saturate-50"
          />
        </div>

        {/* Center seam divider */}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-burgundy transition-opacity duration-500",
            open ? "opacity-0" : "opacity-100",
          )}
        />

        {mode === "hover" && (
          <span
            aria-hidden
            className={cn(
              "eyebrow pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/60 bg-burgundy/80 text-cream transition-opacity duration-300",
              compact ? "px-3.5 py-2" : "px-5 py-2.5",
              open && "opacity-0",
            )}
            style={chromeText}
          >
            <span className="hidden [@media(hover:hover)]:inline">Hover to reveal</span>
            <span className="[@media(hover:hover)]:hidden">Tap to reveal</span>
          </span>
        )}
      </div>
    </div>
  );
}
