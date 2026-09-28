const STEPS = [
  { title: "Brief", text: "Understanding how the space is used and what it needs to do." },
  { title: "Concept", text: "Layout, mood and direction, agreed before anything is built." },
  { title: "Materials", text: "Finishes, joinery and furniture selected and signed off." },
  { title: "Fit-out", text: "Delivery on site through to handover." },
];

export function OraProcess() {
  return (
    <section id="process" className="scroll-mt-20 border-b border-(--burgundy-ink)/18">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-20">
        <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4 mb-8 border-b border-(--burgundy-ink)/18">
          <span className="ora-mono text-(--burgundy-light)">[ How we work ]</span>
          <span className="ora-cap">Brief → Concept → Materials → Fit-out</span>
        </div>
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="pt-[18px] border-t-2 border-(--burgundy-ink)">
              <span className="ora-mono text-(--burgundy-light)">Step 0{i + 1}</span>
              <h3 className="my-2.5 font-display font-medium text-[28px] leading-tight">{s.title}</h3>
              <p className="text-sm leading-[1.6] text-(--burgundy-light)">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
