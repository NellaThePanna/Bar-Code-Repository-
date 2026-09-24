import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RoomStage } from "@/components/RoomAssembly";
import { cn } from "@/lib/utils";

const beats = [
  {
    word: "Brief",
    line: "We begin in the empty room — how you live, the light you have, and what it must hold.",
    placed: 0,
  },
  {
    word: "Concept",
    line: "A layout and a mood take shape, and the anchor pieces find their places first.",
    placed: 2,
  },
  {
    word: "Materials",
    line: "Fabrics, finishes and joinery are chosen side by side, in the light they will live in.",
    placed: 4,
  },
  {
    word: "Fit-out",
    line: "We build, install and style through to handover — the room, realized.",
    placed: 6,
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const beatTextRef = useRef<HTMLDivElement>(null);
  const [beat, setBeat] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight * beats.length}`,
        pin: true,
        invalidateOnRefresh: true,
        onUpdate: (self) =>
          setBeat(Math.min(beats.length - 1, Math.floor(self.progress * beats.length))),
      });
    });
    mm.add("(prefers-reduced-motion: reduce)", () => setReduced(true));
    return () => mm.revert();
  }, []);

  useEffect(() => {
    if (reduced) return;
    const tween = gsap.fromTo(
      beatTextRef.current,
      { autoAlpha: 0, y: 24 },
      { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" },
    );
    return () => {
      tween.kill();
    };
  }, [beat, reduced]);

  const current = beats[beat]!;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="process-heading"
      className={cn(
        "bg-burgundy-deep px-5 text-chalk md:px-10",
        reduced ? "py-24 md:py-32" : "flex h-svh items-center",
      )}
    >
      <div className="mx-auto grid w-full max-w-[1480px] items-center gap-10 md:grid-cols-[5fr_7fr] md:gap-16">
        <div>
          <p id="process-heading" className="eyebrow text-chalk/70">
            [ How We Work ]
          </p>

          {reduced ? (
            <ol className="mt-8 space-y-8">
              {beats.map((b, i) => (
                <li key={b.word}>
                  <span className="eyebrow text-chalk/60">0{i + 1}</span>
                  <h3 className="font-display mt-2 text-4xl font-medium">{b.word}</h3>
                  <p className="font-founder-body mt-3 max-w-md text-base leading-relaxed">
                    {b.line}
                  </p>
                </li>
              ))}
            </ol>
          ) : (
            <>
              <div className="mt-8 flex gap-2" aria-hidden>
                {beats.map((b, i) => (
                  <span
                    key={b.word}
                    className={cn("h-px w-10 bg-chalk", i <= beat ? "opacity-100" : "opacity-25")}
                  />
                ))}
              </div>
              <div
                ref={beatTextRef}
                className="mt-8 min-h-[14rem] md:min-h-[18rem]"
                aria-live="polite"
              >
                <span className="eyebrow text-chalk/60">
                  0{beat + 1} / 0{beats.length}
                </span>
                <h3 className="font-display mt-3 text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] font-medium">
                  {current.word}
                </h3>
                <p className="font-founder-body mt-5 max-w-md text-base leading-relaxed md:text-lg">
                  {current.line}
                </p>
              </div>
            </>
          )}
        </div>

        <RoomStage placed={reduced ? 6 : current.placed} />
      </div>
    </section>
  );
}
