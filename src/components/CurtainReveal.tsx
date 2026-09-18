import { useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  before: string;
  after: string;
  index: number;
};

export function CurtainReveal({ title, before, after, index }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.45 });
  const [toggled, setToggled] = useState<boolean | null>(null);
  const open = toggled ?? inView;

  const panelBase =
    "curtain-fabric absolute overflow-hidden transition-transform duration-[850ms] ease-editorial will-change-transform motion-reduce:transition-opacity motion-reduce:duration-500";

  return (
    <div ref={ref} className="group">
      <div className="mb-4 flex items-end justify-between text-cream">
        <div className="flex items-baseline gap-4">
          <span className="eyebrow opacity-60">0{index + 1}</span>
          <h3 className="font-display text-2xl italic font-medium md:text-3xl">{title}</h3>
        </div>
        <button
          type="button"
          onClick={() => setToggled((t) => !(t ?? inView))}
          className="eyebrow border-b border-cream/40 pb-0.5 opacity-70 transition-opacity hover:opacity-100"
          aria-pressed={open}
        >
          {open ? "Close curtain" : "Open curtain"}
        </button>
      </div>

      <div
        className="relative aspect-[4/5] w-full cursor-pointer overflow-hidden sm:aspect-video"
        onClick={() => setToggled((t) => !(t ?? inView))}
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
        <span className="eyebrow absolute right-4 top-4 bg-burgundy px-2.5 py-1 text-cream sm:right-5 sm:top-auto sm:bottom-5">
          After
        </span>

        {/* Curtain panel A (left / top) */}
        <div
          aria-hidden
          className={cn(
            panelBase,
            "inset-x-0 top-0 h-1/2 w-full sm:inset-y-0 sm:left-0 sm:h-full sm:w-1/2",
            open &&
              "-translate-y-full sm:translate-y-0 sm:-translate-x-full motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:opacity-0",
          )}
        >
          <img
            src={before}
            alt=""
            loading="lazy"
            width={1600}
            height={900}
            className="absolute inset-0 h-[200%] w-full object-cover opacity-30 mix-blend-multiply saturate-50 sm:h-full sm:w-[200%] sm:max-w-none"
          />
          <span className="eyebrow absolute left-4 top-4 bg-burgundy px-2.5 py-1 text-cream sm:left-5 sm:top-auto sm:bottom-5">
            Before
          </span>
        </div>

        {/* Curtain panel B (right / bottom) — slightly staggered */}
        <div
          aria-hidden
          className={cn(
            panelBase,
            "inset-x-0 bottom-0 h-1/2 w-full delay-100 sm:inset-y-0 sm:right-0 sm:h-full sm:w-1/2",
            open &&
              "translate-y-full sm:translate-y-0 sm:translate-x-full motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:opacity-0",
          )}
        >
          <img
            src={before}
            alt=""
            loading="lazy"
            width={1600}
            height={900}
            className="absolute bottom-0 left-0 h-[200%] w-full object-cover opacity-30 mix-blend-multiply saturate-50 sm:right-0 sm:left-auto sm:h-full sm:w-[200%] sm:max-w-none"
          />
        </div>

        {/* Center seam divider */}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute bg-burgundy transition-opacity duration-500",
            "inset-x-0 top-1/2 h-px -translate-y-1/2 sm:inset-y-0 sm:left-1/2 sm:h-full sm:w-px sm:-translate-x-1/2 sm:translate-y-0",
            open ? "opacity-0" : "opacity-100",
          )}
        />
      </div>
    </div>
  );
}
