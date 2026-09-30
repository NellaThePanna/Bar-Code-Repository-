import { createFileRoute } from "@tanstack/react-router";
import oraCss from "@/components/reference-ora/reference-ora.css?url";
import { OraCommercial } from "@/components/reference-ora/OraCommercial";
import { OraFooter } from "@/components/reference-ora/OraFooter";
import { OraHeader } from "@/components/reference-ora/OraHeader";
import { OraInquiry } from "@/components/reference-ora/OraInquiry";
import { OraMasthead } from "@/components/reference-ora/OraMasthead";
import { OraProcess } from "@/components/reference-ora/OraProcess";
import { OraServices } from "@/components/reference-ora/OraServices";
import { OraStatement } from "@/components/reference-ora/OraStatement";

export const Route = createFileRoute("/reference-ora")({
  head: () => ({
    meta: [{ title: "BARCODE Living — Ora (preview)" }],
    links: [
      { rel: "stylesheet", href: oraCss },
      // The root link loads Bodoni Moda upright only; this adds its 400 italic so accent words aren't faux-slanted.
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;1,6..96,400&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Jost:wght@300&family=Pinyon+Script&display=swap",
      },
    ],
  }),
  component: ReferenceOra,
});

function ReferenceOra() {
  return (
    <div className="ora-ref bg-white text-(--burgundy-ink) font-sans antialiased selection:bg-(--burgundy-ink) selection:text-white">
      <OraHeader />
      <main>
        <OraMasthead />
        <OraProcess />
        <OraStatement />
        <OraServices />
        <OraCommercial />
        <OraInquiry />
      </main>
      <OraFooter />
    </div>
  );
}
