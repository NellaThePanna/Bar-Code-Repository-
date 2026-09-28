import { OraArrow } from "./OraArrow";

const SERVICES = [
  {
    title: "Interior design",
    text: "Layouts, materials and finishes, planned around how the space is used.",
    foot: "Residential & commercial",
  },
  { title: "Fit-out", text: "Delivery on site, from first measure to handover.", foot: "Turnkey" },
  { title: "[Service — TBD]", text: "[Service description — TBD]", foot: "[Detail — TBD]" },
];

export function OraServices() {
  return (
    <section id="services" className="scroll-mt-20 border-b border-(--burgundy-ink)/18">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-7 mb-10 border-b border-(--burgundy-ink)/18">
          <div>
            <span className="ora-mono block mb-4 text-(--burgundy-light)">[ Services ]</span>
            <h2 className="ora-disp text-5xl lg:text-[72px] leading-none">
              What we <em>do</em>
            </h2>
          </div>
          <p className="max-w-[400px] text-[15px] leading-[1.6] text-(--burgundy-light)">[Services intro — TBD]</p>
        </div>

        <ul className="grid lg:grid-cols-3 border border-(--burgundy-ink)/18">
          {SERVICES.map((s, i) => (
            <li
              key={s.title}
              className={`p-9 pb-7 min-h-[360px] flex flex-col ${
                i > 0 ? "border-t lg:border-t-0 lg:border-l border-(--burgundy-ink)/18" : ""
              }`}
            >
              <span className="font-display text-[64px] leading-none">0{i + 1}</span>
              <h3 className="mt-12 mb-3 font-display font-medium text-[30px] leading-tight">{s.title}</h3>
              <p className="text-sm leading-[1.65] text-(--burgundy-light)">{s.text}</p>
              <div className="mt-auto pt-5 flex items-center justify-between gap-4 border-t border-(--burgundy-ink)/18 ora-cap">
                <span>{s.foot}</span>
                <OraArrow />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
