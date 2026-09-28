import lockup from "@/assets/logo-b/lockup-burgundy.png";
import { ORA_LINKS } from "./OraHeader";

export function OraFooter() {
  return (
    <footer className="on-light">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 pt-18 pb-10">
        <div className="pb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] border-b border-(--burgundy-ink)/18">
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={lockup} alt="BARCODE Living" className="h-32 w-auto" width={1483} height={1032} />
            <p className="mt-5 max-w-[360px] text-sm leading-[1.6] text-(--burgundy-light)">
              Interior design and fit-out, Dubai.
            </p>
          </div>
          <nav aria-label="Pages">
            <span className="ora-mono block mb-4 text-(--burgundy-light)">Pages</span>
            <ul className="flex flex-col gap-3 text-[13px] tracking-[0.12em] uppercase">
              {ORA_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-(--burgundy-deep) transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <span className="ora-mono block mb-4 text-(--burgundy-light)">Connect</span>
            <ul className="flex flex-col gap-3 text-[13px] tracking-[0.12em] uppercase">
              <li>[Instagram — TBD]</li>
              <li>[Email — TBD]</li>
              <li>[WhatsApp — TBD]</li>
            </ul>
          </div>
        </div>
        <div className="pt-6 flex flex-col sm:flex-row justify-between gap-4 text-xs text-(--burgundy-light)">
          <span>© 2026 BARCODE Living [Legal entity — TBD]</span>
          <div className="flex gap-7">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
