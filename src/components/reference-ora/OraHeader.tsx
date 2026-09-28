import { useEffect, useState } from "react";
import monogram from "@/assets/logo-b/monogram-burgundy.png";

export const ORA_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Commercial", href: "#commercial" },
  { label: "Contact", href: "#contact" },
];

export function OraHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="on-light sticky top-0 z-50 h-20 bg-white border-b border-(--burgundy-ink)/18">
      <div className="max-w-[1440px] mx-auto h-full px-6 lg:px-16 flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3.5">
          <img src={monogram} alt="" className="h-10 w-auto" width={254} height={392} />
          <span>
            <span className="block text-[13px] font-semibold tracking-[0.2em]">BARCODE LIVING</span>
            <span className="block mt-0.5 text-[10px] tracking-[0.16em] uppercase text-(--burgundy-light)">
              Interior design &amp; fit-out
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:flex gap-9 ora-cap">
          {ORA_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-(--burgundy-deep) transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-7">
          <span className="hidden sm:inline ora-cap text-(--burgundy-light)">Dubai</span>
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center h-11 px-[22px] ora-cap bg-(--burgundy-ink) text-white hover:bg-(--burgundy-deep) transition-colors"
          >
            Inquire
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="ora-menu"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden inline-flex items-center h-11 px-4 ora-cap border border-(--burgundy-ink) hover:bg-(--burgundy-ink) hover:text-white transition-colors"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="ora-menu"
          aria-label="Primary"
          className="lg:hidden absolute inset-x-0 top-full bg-white border-b border-(--burgundy-ink)/18 px-6 pb-6"
        >
          <ul>
            {ORA_LINKS.map((l) => (
              <li key={l.href} className="border-b border-(--burgundy-ink)/18">
                <a href={l.href} onClick={() => setOpen(false)} className="flex items-center justify-between py-4 ora-cap">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 flex items-center justify-center h-11 ora-cap bg-(--burgundy-ink) text-white hover:bg-(--burgundy-deep) transition-colors"
          >
            Inquire
          </a>
        </nav>
      )}
    </header>
  );
}
