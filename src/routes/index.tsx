import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CurtainReveal } from "@/components/CurtainReveal";

import heroLiving from "@/assets/hero-living.jpg";
import storyKitchen from "@/assets/story-kitchen.jpg";
import beforeLiving from "@/assets/before-living.jpg";
import afterLiving from "@/assets/after-living.jpg";
import beforeKitchen from "@/assets/before-kitchen.jpg";
import afterKitchen from "@/assets/after-kitchen.jpg";
import beforeSuite from "@/assets/before-suite.jpg";
import afterSuite from "@/assets/after-suite.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bar Code Living — Interior Design & Fit-Out Studio, Dubai" },
      {
        name: "description",
        content:
          "Bar Code Living is a premium residential and commercial interior fit-out studio in Dubai, turning bare shells into finished, liveable spaces from concept to handover.",
      },
      { property: "og:title", content: "Bar Code Living — Interior Design & Fit-Out, Dubai" },
      {
        property: "og:description",
        content: "We design spaces that hold the way you actually live. Premium fit-out from concept to handover.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const transformations = [
  { title: "Living Room", before: beforeLiving, after: afterLiving },
  { title: "Kitchen", before: beforeKitchen, after: afterKitchen },
  { title: "Master Suite", before: beforeSuite, after: afterSuite },
];

const steps = [
  { n: "01", title: "Consultation", when: "Week 1", text: "We walk the space, listen, and set the brief together." },
  { n: "02", title: "Concept & Moodboard", when: "Week 2", text: "Palette, materials, and spatial direction, presented as one story." },
  { n: "03", title: "Design & Materials", when: "Week 3–4", text: "Detailed drawings, joinery, lighting, and final material selections." },
  { n: "04", title: "Fit-Out & Handover", when: "Week 5+", text: "Our team builds, finishes, styles, and hands over the keys." },
];

function Index() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      {/* ─── HERO ─── */}
      <section className="relative px-5 pt-7 pb-20 md:px-10 md:pt-9 md:pb-28">
        <div className="eyebrow flex items-center justify-between">
          <span>Fit-Out · Interior Design · Dubai</span>
          <span>Est. 2014</span>
        </div>

        <div className="relative mt-16 md:mt-24">
          <h1
            className="font-display relative z-10 -ml-[0.04em] leading-[0.82] font-black tracking-[-0.045em] uppercase"
            style={{ fontSize: "clamp(4.2rem, 14.5vw, 15.5rem)" }}
          >
            Bar
            <br />
            Code
            <br />
            <span className="md:pl-[0.9em]">Living</span>
          </h1>

          <img
            src={heroLiving}
            alt="Warm, softly lit living room designed by Bar Code Living"
            width={1024}
            height={1280}
            fetchPriority="high"
            className="mt-10 aspect-[4/5] w-[78%] object-cover md:absolute md:top-[38%] md:right-0 md:mt-0 md:w-[34vw] md:max-w-[520px] lg:top-[30%] lg:right-[3vw]"
          />
        </div>

        <p className="font-display mt-12 max-w-md text-xl italic leading-snug md:mt-20 md:text-2xl">
          We design spaces that hold the way you actually live.
        </p>
      </section>

      {/* ─── BRAND STORY ─── */}
      <section className="px-5 py-24 md:px-10 md:py-40">
        <div className="grid gap-14 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-5">
            <img
              src={storyKitchen}
              alt="Warm kitchen dining nook with oak cabinetry"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>

          <div className="md:col-span-6 md:col-start-7 md:self-center">
            <Reveal>
              <p className="eyebrow">[ The Studio ]</p>
              <h2 className="font-display mt-6 text-3xl leading-[1.1] font-bold tracking-tight md:text-5xl">
                From bare shell to a place you already feel at home in.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                Bar Code Living is a Dubai fit-out studio working across residential and commercial
                interiors. We take raw, unfinished spaces and carry them all the way through — concept,
                drawings, materials, joinery, build, and styling — so the day you receive the keys is the
                day you move in. One team, one point of contact, from first sketch to handover.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-border pt-8">
                {[
                  ["10+", "Years experience"],
                  ["80+", "Projects delivered"],
                  ["Res. & Com.", "Residential & Commercial"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <dt className="font-display text-2xl font-bold tracking-tight md:text-3xl">{v}</dt>
                    <dd className="eyebrow mt-1 opacity-70">{l}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── BEFORE / AFTER CURTAIN REVEAL ─── */}
      <section className="bg-burgundy px-5 py-24 text-cream md:px-10 md:py-36">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow opacity-70">[ Before / After ]</p>
              <h2 className="font-display mt-5 text-4xl leading-[0.95] font-black tracking-tight uppercase md:text-7xl">
                See the
                <br />
                Transformation
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed opacity-75 md:text-right">
              Three spaces, taken from raw concrete to finished rooms. Scroll to draw the curtains — or tap
              any panel.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-28">
          {transformations.map((t, i) => (
            <Reveal key={t.title}>
              <CurtainReveal {...t} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="px-5 py-24 md:px-10 md:py-40">
        <Reveal>
          <p className="eyebrow">[ How We Work ]</p>
          <h2 className="font-display mt-6 max-w-2xl text-3xl leading-[1.1] font-bold tracking-tight md:text-5xl">
            A calm, four-step path from first conversation to keys in hand.
          </h2>
        </Reveal>

        <ol className="relative mt-20 grid gap-14 md:grid-cols-4 md:gap-6">
          {/* connecting line */}
          <div
            aria-hidden
            className="absolute top-4 left-0 hidden h-px w-full bg-border md:block"
          />
          <div
            aria-hidden
            className="absolute top-0 left-4 h-full w-px bg-border md:hidden"
          />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 120} className="relative pl-12 md:pl-0">
              <span className="absolute top-0 left-0 inline-flex h-8 items-center rounded-full bg-burgundy px-4 text-cream md:static">
                <span className="eyebrow">{s.n}</span>
              </span>
              <div className="md:mt-8">
                <p className="eyebrow opacity-60">{s.when}</p>
                <h3 className="font-display mt-2 text-xl font-bold tracking-tight md:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ─── CLOSING CTA ─── */}
      <section className="bg-burgundy px-5 pt-28 pb-10 text-cream md:px-10 md:pt-44">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow opacity-70">[ Start a Project ]</p>
          <h2 className="font-display mt-6 text-5xl leading-[1] font-bold tracking-tight md:text-8xl">
            Let&rsquo;s design your next space.
          </h2>
          <a href="mailto:hello@barcodeliving.com" className="btn-outline-cream mt-12">
            Book a Consultation
          </a>
        </Reveal>

        <footer className="mt-28 border-t border-cream/20 pt-6 md:mt-40">
          <div className="eyebrow flex flex-col gap-3 opacity-70 md:flex-row md:items-center md:justify-between">
            <span>Bar Code Living · Dubai, UAE</span>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <a href="mailto:hello@barcodeliving.com" className="hover:opacity-100">
                hello@barcodeliving.com
              </a>
              <a href="tel:+97140000000" className="hover:opacity-100">
                +971 4 000 0000
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-100">
                @barcodeliving
              </a>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
