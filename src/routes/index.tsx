import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ClosingCta } from "@/components/ClosingCta";
import { HomeHero } from "@/components/HomeHero";
import { OurCreations } from "@/components/OurCreations";
import { ProcessSection } from "@/components/ProcessSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bar Code Living — Interior Design & Fit-Out Studio, Dubai" },
      {
        name: "description",
        content:
          "Bar Code Living is Arpita Kaur's Dubai interior design and fit-out studio, where beauty meets reality.",
      },
      { property: "og:title", content: "Bar Code Living — Dubai Interior Design & Fit-Out" },
      {
        property: "og:description",
        content: "Welcome to Bar Code Living — where beauty meets reality.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SESSION_KEY = "bar-code-living-intro-seen";
const FIRST_LINE = "Hi, I'm Arpita Kaur.";
const SECOND_LINE = "Welcome to Bar Code — where beauty meets reality.";

type SplashStage = "checking" | "first" | "pause" | "second" | "hold" | "fade" | "done";

function Index() {
  const [stage, setStage] = useState<SplashStage>("checking");
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  const timers = useRef<Array<ReturnType<typeof setTimeout>>>([]);

  const clearTimers = () => {
    timers.current.forEach((timer) => clearTimeout(timer));
    timers.current = [];
  };

  const fadeOut = () => {
    clearTimers();
    sessionStorage.setItem(SESSION_KEY, "true");
    setFirstCount(FIRST_LINE.length);
    setSecondCount(SECOND_LINE.length);
    setStage("fade");
    timers.current.push(setTimeout(() => setStage("done"), 720));
  };

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      setStage("done");
      return;
    }

    sessionStorage.setItem(SESSION_KEY, "true");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      setFirstCount(FIRST_LINE.length);
      setSecondCount(SECOND_LINE.length);
      setStage("hold");
      timers.current.push(setTimeout(() => setStage("fade"), 500));
      timers.current.push(setTimeout(() => setStage("done"), 1220));
      return clearTimers;
    }

    setStage("first");

    const firstDuration = FIRST_LINE.length * 58;
    const secondStart = firstDuration + 600;
    const secondDuration = SECOND_LINE.length * 45;

    for (let index = 1; index <= FIRST_LINE.length; index += 1) {
      timers.current.push(setTimeout(() => setFirstCount(index), index * 58));
    }
    timers.current.push(setTimeout(() => setStage("pause"), firstDuration));
    timers.current.push(setTimeout(() => setStage("second"), secondStart));
    for (let index = 1; index <= SECOND_LINE.length; index += 1) {
      timers.current.push(setTimeout(() => setSecondCount(index), secondStart + index * 45));
    }
    timers.current.push(setTimeout(() => setStage("hold"), secondStart + secondDuration));
    timers.current.push(setTimeout(() => setStage("fade"), secondStart + secondDuration + 700));
    timers.current.push(setTimeout(() => setStage("done"), secondStart + secondDuration + 1420));

    return clearTimers;
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {stage !== "done" && (
        <section
          aria-label="Welcome to Bar Code Living"
          onPointerDown={fadeOut}
          className={`fixed inset-0 z-50 flex min-h-dvh cursor-default items-center bg-background px-6 transition-opacity duration-700 ease-in-out md:px-14 lg:px-24 ${stage === "fade" || stage === "checking" ? "pointer-events-none opacity-0" : "opacity-100"}`}
        >
          <h1 className="sr-only">
            {FIRST_LINE} {SECOND_LINE}
          </h1>

          <div aria-hidden="true" className="mx-auto w-full max-w-6xl font-display text-balance">
            <p className="min-h-[1.25em] text-[clamp(2.6rem,7vw,6.8rem)] leading-[1.06] font-medium">
              {FIRST_LINE.slice(0, firstCount)}
              {(stage === "first" || stage === "pause") && <span className="typing-caret" />}
            </p>
            <p className="mt-7 min-h-[2.2em] max-w-5xl text-[clamp(2rem,5vw,5rem)] leading-[1.12] font-normal md:mt-10">
              {SECOND_LINE.slice(0, secondCount)}
              {(stage === "second" || stage === "hold") && <span className="typing-caret" />}
            </p>
          </div>
        </section>
      )}

      <div className="relative">
        <HomeHero animate={stage === "done"} />
        <div className="relative z-10">
          <OurCreations />
          <ProcessSection />
          <ClosingCta />
        </div>
      </div>
      <footer className="relative z-10 bg-burgundy px-5 py-10 text-cream md:px-10">
        <div className="eyebrow flex flex-col gap-3 border-t border-cream/20 pt-6 opacity-70 md:flex-row md:items-center md:justify-between">
          <span>Bar Code Living · Dubai, UAE</span>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <a href="mailto:hello@barcodeliving.com" className="hover:opacity-100">
              hello@barcodeliving.com
            </a>
            <a href="tel:+97140000000" className="hover:opacity-100">
              +971 4 000 0000
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-100"
            >
              @barcodeliving
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
