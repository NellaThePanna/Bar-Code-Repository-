import { Button } from "@/components/ui/button";
import heroLiving from "@/assets/hero-living.jpg";
import { useEffect, useRef } from "react";

type HomeHeroProps = {
  animate: boolean;
};

export function HomeHero({ animate }: HomeHeroProps) {
  const rootRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const supportingRef = useRef<HTMLDivElement>(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    if (!animate || hasPlayedRef.current) return;

    hasPlayedRef.current = true;
    let cleanup: () => void = () => undefined;

    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        if (!rootRef.current || !imageRef.current || !headlineRef.current || !supportingRef.current) {
          return;
        }

        gsap.registerPlugin(ScrollTrigger);

        const context = gsap.context(() => {
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            gsap.set([imageRef.current, headlineRef.current, supportingRef.current], {
              clearProps: "all",
              opacity: 1,
              scale: 1,
              y: 0,
            });
            return;
          }

          const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
          timeline
            .fromTo(imageRef.current, { scale: 1.1 }, { scale: 1, duration: 2 })
            .fromTo(
              headlineRef.current,
              { autoAlpha: 0, y: 40 },
              { autoAlpha: 1, y: 0, duration: 1.15 },
              0.5,
            )
            .fromTo(
              supportingRef.current,
              { autoAlpha: 0, y: 16 },
              { autoAlpha: 1, y: 0, duration: 0.9 },
              0.8,
            );
        }, rootRef);

        cleanup = () => context.revert();
      },
    );

    return () => cleanup();
  }, [animate]);

  return (
    <section ref={rootRef} aria-labelledby="home-hero-heading" className="sticky top-0 h-svh overflow-hidden bg-burgundy-deep">
      <img
        ref={imageRef}
        src={heroLiving}
        alt="Warm, refined living room interior"
        className="photo-grade absolute inset-0 h-full w-full object-cover object-center will-change-transform"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-burgundy-deep/60" />

      <div className="relative z-10 flex h-full items-end px-6 pb-[max(4rem,10svh)] md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <h1
            ref={headlineRef}
            id="home-hero-heading"
            className="font-founder text-chalk text-[clamp(4rem,10vw,9rem)] leading-[0.88] font-medium"
          >
            Spaces, Realized.
          </h1>
          <div ref={supportingRef} className="mt-7 flex flex-col items-start gap-7 md:mt-9 md:gap-8">
            <p className="max-w-xl font-founder-body text-base leading-relaxed text-chalk md:text-xl">
              From concept to completion — interior design and fit-out, done right.
            </p>
            <Button
              asChild
              size="lg"
              className="h-12 border border-chalk bg-chalk px-7 font-founder-body text-xs font-semibold uppercase text-burgundy-deep hover:bg-transparent hover:text-chalk"
            >
              <a href="/our-creations">View Our Work</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}