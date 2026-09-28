import { OraArrow } from "./OraArrow";
import { OraPlate } from "./OraPlate";

const CAFE_TABLE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAB089i8f8LVtcCOhrUH3oyjQ8YEA-qJifcQDZvrDLtRAj0pFcfUmrbyaf1Uw15my-nD6U0w3mJjd18F6JKgkdhRll9wtzi2N7IkXR6ZyABOqEIVppp2Q9esldJnYZPtWUX4IIaiZMllWEB-xhvkQOSeYLKpltcfkIthFgQAGp_QtS53zCilTunVpjw-V3gkXsP26s3WJX2fg5UBLKu80LaTaE1t_PuwLC04NtvLZ3HlkBXSO1iPFRb";
const MODULAR_SOFA =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAyscq6_Zwo_TiWFuyvGOU5fLvn0wb0wSMMHa4rZT1EgO49PtRiBVN9j3sTYVyfIaFkc16eBMZWG4g9FWxk2pMZfhYqegdx97rQl7PgMdRN2fpyd_wVBDs5hyRJVRF9WtzXLh5iqqiJKmHbQO38Y4fvAyhxwluQ8dXed-cOmqk5l8GavCa-0TfEoDBpJaBnbZ3F897i3zRAR4pV7sjUd7JKoHtrJAQX8pl2ExVksxMlO8Z_rCAYbdaR";
const CURVED_SOFA =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDp5GBZjDc5xkPng8vfe1FAECEFk68sgttMntnacSByjzzb-M_qNpb1mZQDiTyftRcBtYnkGM0df_j1EVCqn41FpHFAN0pGWzB6o9lC8mY_pV_FbNpGcQ5arGm-k24do3doMmYh__B8QAY5WB-9Qde7XMx-8Ss5b4dgojO36NX0AkUOOtF0Mk2IuHtXOsEhGjD1-QFyNQ8KlBZZsVvfSE4cMqGUs2mfitvJPzLEtrxUjQFukPDtC0HB";

export function OraCommercial() {
  return (
    <section
      id="commercial"
      className="on-dark scroll-mt-20 relative overflow-hidden bg-(--burgundy-ink) text-white"
    >
      <div className="ora-slats absolute inset-0 opacity-30 pointer-events-none"></div>
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16 py-20 lg:pt-28 lg:pb-30">
        <div className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="ora-mono block mb-4 text-(--cream-deep)/80">[ Commercial ]</span>
            <h2 className="ora-disp text-5xl sm:text-[64px] lg:text-[84px] leading-[0.98]">
              Commercial
              <br />
              <em className="text-(--cream-deep)">interiors</em>
            </h2>
          </div>
          <p className="max-w-[360px] pl-6 border-l border-white/14 text-[15px] leading-[1.6] text-(--cream-deep)/85">
            [Commercial intro — TBD]
          </p>
        </div>

        <div className="grid lg:grid-cols-[8fr_4fr] gap-6 lg:gap-8">
          <div className="on-light bg-white text-(--burgundy-ink) p-6 sm:p-10 flex flex-col">
            <div className="pb-[22px] flex flex-wrap items-end justify-between gap-4 border-b border-(--burgundy-ink)/18">
              <div>
                <span className="ora-mono text-(--burgundy-light)">[Client project — TBD]</span>
                <h3 className="mt-2 font-display font-medium text-[28px] sm:text-[34px] leading-tight">
                  [Project name — TBD]
                </h3>
              </div>
              <a
                href="#client-project-tbd"
                className="inline-flex items-center gap-2.5 pb-1.5 border-b border-current ora-cap hover:text-(--burgundy-deep) transition-colors"
              >
                View project
                <OraArrow dir="up-right" />
              </a>
            </div>
            <p className="py-[22px] text-sm leading-[1.6] text-(--burgundy-light)">[Project narrative — TBD]</p>
            <div className="mt-auto grid sm:grid-cols-2 gap-6">
              <div>
                <img
                  src={CAFE_TABLE}
                  alt="Placeholder photo: green lacquer café table with woven chairs"
                  className="w-full aspect-[4/3] object-cover"
                />
                <OraPlate fig="04">Café table</OraPlate>
              </div>
              <div>
                <img
                  src={MODULAR_SOFA}
                  alt="Placeholder photo: moss green modular sofa in a bright living room"
                  className="w-full aspect-[4/3] object-cover"
                />
                <OraPlate fig="05">Lounge seating</OraPlate>
              </div>
            </div>
          </div>

          <div className="on-light bg-white text-(--burgundy-ink) p-6 sm:p-10 flex flex-col">
            <div className="pb-[22px] flex items-end justify-between gap-4 border-b border-(--burgundy-ink)/18">
              <h4 className="font-display font-medium text-[26px] leading-tight">Semi-private areas</h4>
              <a aria-label="Semi-private areas" href="#zones" className="hover:text-(--burgundy-deep) transition-colors">
                <OraArrow dir="up-right" />
              </a>
            </div>
            <p className="py-[22px] text-sm leading-[1.6] text-(--burgundy-light)">
              Layout guides movement naturally without harsh partitions.
            </p>
            <div className="mt-auto">
              <img
                src={CURVED_SOFA}
                alt="Placeholder photo: person seated on a low curved green sofa"
                className="w-full aspect-[4/3] object-cover"
              />
              <OraPlate fig="06">Curved green sofa</OraPlate>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
