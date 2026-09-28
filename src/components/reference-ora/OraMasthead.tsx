import wordmark from "@/assets/logo-b/wordmark-burgundy.png";
import { OraArrow } from "./OraArrow";
import { OraPlate } from "./OraPlate";

const DINING_BOOTHS =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBEXohCRM3aQpDVXungTT35Pr4UsijVuDBXCyiqBYF8k6GO0qn6GivLomeIXhwfikSRX795xvbOLnbe4LKv5luFxcUfhij-BPccYVWNTA1XhONxQRiZhtBaXXue8PJgZj2G5qRPJjA-cTgjH_Wo9_6aJe1j8iSkuBOd5HHXFpuvT2Fu_pTVhWOoCby8n5ruHipfFcspMwi0i2y51i0Pckgu6nD_N-3uqG8E3EaSOsDCjjry8haPpg0n";
const LEATHER_ARMCHAIR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD2-_d1xbeFXH_X4OtH95CchUiUSHhfqQMUHx455P3S-pupPVy0cYjWIXQzFi6CTh8-d-eNiIChyB-igV6kz_AcKW40y4Cg07Jyg1lxjcclo2Opv8w_sEOl_glGp3dYu2IaMo1TcSuMXzgmpWOlJHtSMsuCIqAuILM2muPwHASLBLJrxop1ROC9FrMJIpkhgDC1MoyJ2I7LxKutvhDX5b5jUomoKP8Jb7tZ4sRILag8RGRKrbDNnI0Y";

export function OraMasthead() {
  return (
    <>
      <section id="top" className="scroll-mt-20 border-b border-(--burgundy-ink)/18">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 pt-10 pb-8 lg:pt-16 lg:pb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <h1>
            <span className="sr-only">BARCODE Living</span>
            <img src={wordmark} alt="" className="w-full max-w-[760px] h-auto" width={1483} height={517} />
          </h1>
          <div className="max-w-[380px] lg:pb-3.5">
            <span className="ora-mono text-(--burgundy-light)">[ Studio ]</span>
            <p className="mt-2.5 text-[15px] leading-[1.6]">Interior design and fit-out, Dubai. [Studio philosophy line — TBD]</p>
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-20 border-b border-(--burgundy-ink)/18">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[4fr_8fr]">
          <div className="px-6 py-10 lg:pl-16 lg:pr-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-(--burgundy-ink)/18">
            <div>
              <span className="ora-mono block mb-4 text-(--burgundy-light)">01 / Selected detail</span>
              <img
                src={DINING_BOOTHS}
                alt="Placeholder photo: wooden restaurant dining booths"
                className="w-full aspect-[4/3] object-cover"
              />
              <OraPlate fig="01">Dining booths</OraPlate>
              <p className="mt-6 text-sm leading-[1.65]">
                [Short studio intro — TBD. Two lines on how BARCODE Living works with a space.]
              </p>
            </div>
            <div className="ora-mono mt-8 pt-5 flex justify-between gap-4 border-t border-(--burgundy-ink)/18">
              <span className="text-(--burgundy-light)">[Project — TBD]</span>
              <span>[Year]</span>
            </div>
          </div>

          <div className="px-6 py-10 lg:pl-10 lg:pr-16">
            <div className="ora-framed">
              <img
                src={LEATHER_ARMCHAIR}
                alt="Placeholder photo: curved leather armchair by a bookshelf, hand holding a coffee cup"
                className="w-full aspect-[2/1] object-cover"
              />
            </div>
            <OraPlate fig="02" note="Placeholder photography">
              Residential living room
            </OraPlate>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <span className="ora-mono text-(--burgundy-light)">[Current project — TBD]</span>
              <a
                href="#commercial"
                className="inline-flex items-center gap-2.5 pb-1.5 border-b border-current ora-cap hover:text-(--burgundy-deep) transition-colors"
              >
                View the work
                <OraArrow />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
