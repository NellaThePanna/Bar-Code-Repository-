import { CurtainReveal } from "@/components/CurtainReveal";

// nova-debt: gradient SVGs stand in until real before/after photography exists
const placeholder = (from: string, to: string, label: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs><rect width="800" height="1000" fill="url(#g)"/><text x="400" y="510" text-anchor="middle" font-family="Jost, sans-serif" font-size="26" letter-spacing="6" fill="#FAF7F2" opacity="0.85">${label}</text></svg>`,
  )}`;

const projects = [
  {
    title: "Project 01",
    before: placeholder("#FEEFDC", "#F5DFC3", "BEFORE · PLACEHOLDER"),
    after: placeholder("#8C5866", "#4A2530", "AFTER · PLACEHOLDER"),
  },
  {
    title: "Project 02",
    before: placeholder("#F5DFC3", "#FEEFDC", "BEFORE · PLACEHOLDER"),
    after: placeholder("#63343C", "#8C5866", "AFTER · PLACEHOLDER"),
  },
  {
    title: "Project 03",
    before: placeholder("#FEEFDC", "#F5DFC3", "BEFORE · PLACEHOLDER"),
    after: placeholder("#4A2530", "#8C5866", "AFTER · PLACEHOLDER"),
  },
];

export function OurCreations() {
  return (
    <section
      id="our-creations"
      aria-labelledby="our-creations-heading"
      className="bg-cream-deep px-5 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1480px]">
        <p className="eyebrow">[ Selected Work ]</p>
        <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2
            id="our-creations-heading"
            className="font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[1] font-medium"
          >
            Our Creations
          </h2>
          <p className="font-founder-body max-w-md text-base leading-relaxed text-burgundy">
            Three rooms, before and after. Draw back the curtain on each to see the change.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3 md:gap-8">
          {projects.map((project, index) => (
            <CurtainReveal
              key={project.title}
              {...project}
              index={index}
              mode="hover"
              size="compact"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
