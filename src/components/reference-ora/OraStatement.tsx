import monogramCream from "@/assets/logo-b/monogram-cream.png";
import { OraPlate } from "./OraPlate";

const TIMBER_DINING =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB9_fsZaVHneaoeYBwf_uKZaCM9irv7iRo2fhpRPGEL8nb8yL9dpvMhAQM7eeM3mVVRfzlDvS2ijw9EDbUdaDDA5KevPb1jibsNgzjEVfgUNX8ItmchUiEB4EhlAVvB8i4-KWH5I6KZhR5A6KUuU4PdK_LNNK7xuFRkRFM6JJR0PsgdEFs_Bpgl-y9yWZbfWtJsCw9MLAR3Zix8fxHSvRgAwpgq0aeErS-h0DPIO6tSp_bed8eiTrL_";

export function OraStatement() {
  return (
    <section className="on-dark bg-(--burgundy-ink) text-white">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2">
        <div className="px-6 py-20 lg:px-16 lg:py-24 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/14">
          <div>
            <span className="ora-mono block mb-4 text-(--cream-deep)/80">[ Studio ]</span>
            <h2 className="ora-disp mt-2 mb-8 text-5xl sm:text-[64px] lg:text-[84px] leading-[0.98]">
              Spaces,
              <br />
              <em className="text-(--cream-deep)">considered.</em>
            </h2>
            <p className="max-w-[440px] text-base leading-[1.7] text-(--cream-deep)/85">
              [Studio statement — TBD. A short paragraph in your own words about how a BARCODE Living space should feel
              to live in.]
            </p>
          </div>
          <div className="mt-14 pt-7 flex items-center gap-4 border-t border-white/14">
            <img src={monogramCream} alt="" className="h-12 w-auto" width={264} height={399} />
            <div>
              <span className="block text-[13px] font-medium tracking-[0.16em] uppercase">BARCODE Living</span>
              <span className="text-[13px] text-(--cream-deep)/80">Residential &amp; commercial interiors</span>
            </div>
          </div>
        </div>

        <div className="px-6 pt-10 pb-12 lg:pt-16 lg:pr-16 lg:pl-14 flex flex-col">
          <div className="ora-framed lg:flex-1 lg:flex">
            <img
              src={TIMBER_DINING}
              alt="Placeholder photo: timber-panelled dining room with green booth seating"
              className="w-full aspect-[4/5] lg:aspect-auto lg:flex-1 lg:min-h-[540px] object-cover"
            />
          </div>
          <OraPlate fig="03" tone="dark" note="Placeholder photography">
            Dining interior
          </OraPlate>
        </div>
      </div>
    </section>
  );
}
