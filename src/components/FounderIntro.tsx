import { useEffect, useRef } from "react";

import founderPortrait from "@/assets/founder-arpita-placeholder.jpg";

export function FounderIntro() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      if (reducedMotion.matches) {
        image.style.transform = "translate3d(0, 0, 0) scale(1.08)";
        return;
      }

      const rect = section.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const offset = (progress - 0.5) * 72;
      image.style.transform = `translate3d(0, ${offset}px, 0) scale(1.12)`;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92svh] overflow-hidden bg-background px-5 py-16 md:min-h-screen md:px-10 md:py-24"
    >
      <div className="mx-auto grid min-h-[calc(92svh-8rem)] max-w-[1480px] items-center gap-10 md:min-h-[calc(100vh-12rem)] md:grid-cols-12 md:gap-8">
        <div className="relative z-10 order-2 md:order-1 md:col-span-7 md:pr-8 lg:col-span-6">
          <div className="mb-8 h-px w-16 bg-burgundy" aria-hidden />
          <p className="eyebrow">A note from our founder</p>
          <h2 className="font-founder mt-8 max-w-3xl text-[clamp(2.8rem,6.3vw,6.5rem)] leading-[0.98] font-medium">
            Hi, I&rsquo;m Arpita Kaur.
            <br />
            <span className="font-script mr-2 text-[1.22em] font-normal">Welcome</span>
            <span className="whitespace-nowrap">to Bar Code Living.</span>
          </h2>
          <p className="font-founder-body mt-9 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I founded Bar Code Living to make the journey from an empty space to a deeply personal home
            feel considered, collaborative, and joyful. Every project begins by listening to how you want
            to live, then shaping each detail around that story.
          </p>
        </div>

        <div className="relative order-1 h-[48svh] min-h-[360px] overflow-hidden md:order-2 md:col-span-5 md:h-[72vh] lg:col-start-8">
          <img
            ref={imageRef}
            src={founderPortrait}
            alt="Placeholder portrait representing founder Arpita Kaur"
            width={1024}
            height={1536}
            fetchPriority="high"
            className="photo-grade absolute -inset-y-[10%] left-0 h-[120%] w-full object-cover will-change-transform"
          />
          <span className="eyebrow absolute right-4 bottom-4 bg-background px-2.5 py-1 text-foreground md:right-5 md:bottom-5">
            Founder portrait · placeholder
          </span>
        </div>
      </div>
    </section>
  );
}