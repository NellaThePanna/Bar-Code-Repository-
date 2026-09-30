import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import POS from "@/assets/opening/positions.json";
import roomEmpty from "@/assets/opening/room-empty.webp";
import rug from "@/assets/opening/rug.webp";
import floorShadow from "@/assets/opening/floor-shadow.webp";
import sofa from "@/assets/opening/sofa.webp";
import coffeeTable from "@/assets/opening/coffee-table.webp";
import floorLamp from "@/assets/opening/floor-lamp.webp";
import oliveTree from "@/assets/opening/olive-tree.webp";
import artwork from "@/assets/opening/artwork.webp";
import mistBack from "@/assets/opening/mist-back.webp";
import mistFront from "@/assets/opening/mist-front.webp";
import { Link } from "@tanstack/react-router";
import { FounderIntro } from "./FounderIntro";
import { CropMarks, V03Contact, V03Footer, V03Header } from "./V03Chrome";
import phSunsetWindow from "@/assets/v03/ph-sunset-window.webp";
import phEmpty from "@/assets/v03/ph-empty.webp";
import phSunsetDoor from "@/assets/v03/ph-sunset-door.webp";
import imperialLivingDining from "@/assets/v03/projects/imperial-avenue-living-dining.webp";
import bldCrescentBedroom from "@/assets/v03/projects/bld-crescent-bedroom.webp";
import beachMansionLiving from "@/assets/v03/projects/beach-mansion-1408-living.webp";
import matArt from "@/assets/v03/mat-art.webp";
import matRug from "@/assets/v03/mat-rug.webp";
import matTable from "@/assets/v03/mat-table.webp";
import matLamp from "@/assets/v03/mat-lamp.webp";

type Key = keyof typeof POS;

const PIECES: [Key, string][] = [
  ["rug", rug],
  ["shadow", floorShadow],
  ["sofa", sofa],
  ["table", coffeeTable],
  ["lamp", floorLamp],
  ["plant", oliveTree],
  ["art", artwork],
];

// the order furniture arrives (sofa waits for the table: they overlap in the photo)
type Arriving = Exclude<Key, "shadow">;
const ORDER: [Arriving, string][] = [
  ["rug", "Rug"],
  ["table", "Coffee table"],
  ["sofa", "Sofa"],
  ["lamp", "Floor lamp"],
  ["plant", "Olive tree"],
  ["art", "Artwork"],
];
const DEPTH: Record<Arriving, number> = { rug: 0.6, table: 1.1, sofa: 1, lamp: 0.9, plant: 1.3, art: 0.5 };

const STATEMENT = [
  "We design apartments, holiday homes and short-stay",
  "properties with a fashion eye and a designer's discipline.",
  "Every space we touch feels elevated, but never staged.",
  "Considered, but never precious.",
  "A place people want to stay in, and come back to.",
];

const SWATCHES = [
  ["#3E2723", "01 / Walnut"],
  ["#DCCBB5", "02 / Travertine"],
  ["#E8E2D5", "03 / Lime plaster"],
  ["#B59A57", "04 / Brass"],
  ["#E0D7C6", "05 / Linen"],
  ["#EDE8DF", "06 / Bouclé"],
];

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const seg = (p: number, a: number, b: number) => clamp((p - a) / (b - a));
const io = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const out = (t: number) => 1 - Math.pow(1 - t, 3);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export function V03Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const $ = (id: string) => document.getElementById(id) as HTMLElement;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const room = $("room");
    const pieces = {} as Record<Key, HTMLElement>;
    room.querySelectorAll<HTMLElement>(".piece").forEach((el) => (pieces[el.dataset["k"] as Key] = el));
    const tickEls = [...$("ticks").children];
    const letters = [...$("bc").children] as HTMLElement[];
    const lines = [...$("sp").children] as HTMLElement[];
    const opening = $("top");
    const hdr = $("hdr");
    const themed = [...document.querySelectorAll<HTMLElement>(".v03 [data-header]")];

    function frame() {
      const vw = innerWidth;
      const vh = innerHeight;
      const r = opening.getBoundingClientRect();
      const p = reduce ? 0.7 : clamp(-r.top / (r.height - vh));
      const roomW = room.offsetWidth;
      const roomH = room.offsetHeight;

      // F1 -> F2: sans tagline becomes serif; small photo appears over the text
      const sw = io(seg(p, 0.03, 0.07));
      const tagOut = io(seg(p, 0.15, 0.25));
      $("tSans").style.opacity = String(1 - sw);
      $("tSerif").style.opacity = String(sw * (1 - tagOut));
      $("tSerif").style.transform = `translateY(${-tagOut * vh * 0.35}px) scale(${1 + tagOut * 0.06})`;
      $("tSans").style.transform = `translateY(${-sw * 6}px)`;
      $("hint").style.opacity = String(1 - seg(p, 0.02, 0.05));

      // photo: 0 -> 19% wide (frame 2) -> full bleed; the image lags the frame slightly (parallax)
      const pin = out(seg(p, 0.05, 0.1));
      const z = io(seg(p, 0.11, 0.31));
      const small = Math.max(0.19 * vw, Math.min(vw * 0.46, 180)) / roomW;
      const frameScale = lerp(small, 1, z);
      const imgScale = frameScale * lerp(1.06, 1.0, z);
      const cam = io(seg(p, 0.31, 0.86));
      // on narrow screens the camera pans to each piece as it lands
      let fx = 50;
      if (roomW > vw * 1.15) {
        const f = (k: Key) => POS[k].l + POS[k].w / 2;
        const stops = [50, f("rug"), f("table"), f("sofa"), f("lamp"), f("plant"), f("art"), 50];
        const q = clamp((p - 0.3) / (0.7 - 0.3)) * (stops.length - 1);
        const i = Math.min(stops.length - 2, Math.floor(q));
        fx = lerp(stops[i]!, stops[i + 1]!, io(q - i));
      }
      const maxShift = Math.max(0, (roomW * imgScale - vw) / 2);
      const shift = clamp(((50 - fx) / 100) * roomW * imgScale, -maxShift, maxShift);
      room.style.transform = `translate(calc(-50% + ${shift}px),-50%) scale(${imgScale * (1 + cam * 0.06)})`;
      // clip the window to the growing frame
      const fw = roomW * frameScale;
      const fh = roomH * frameScale;
      const ix = Math.max(0, (vw - fw) / 2);
      const iy = Math.max(0, (vh - fh) / 2);
      const cy = iy + (fh / 2) * (1 - pin);
      const cx = ix + (fw / 2) * (1 - pin);
      $("win").style.clipPath = `inset(${cy}px ${cx}px ${cy}px ${cx}px)`;

      // the Canva room's own sofa + table lift out as we zoom in (the room is "read" empty)
      const lift = io(seg(p, 0.16, 0.27));

      // furniture arrives one by one
      let placed = 0;
      let current = "Rug";
      const ops = {} as Record<Arriving, number>;
      ORDER.forEach(([k, name], i) => {
        const a = 0.33 + i * 0.058;
        const t = out(seg(p, a, a + 0.05));
        if (p >= a - 0.01) current = name;
        if (t > 0.97) placed++;
        let op = seg(p, a, a + 0.02);
        let y = -(1 - t) * vh * 0.12 * DEPTH[k];
        let s = 1 + (1 - t) * 0.04;
        // before .16 they are in the photo, then lift out, then return
        if ((k === "sofa" || k === "table") && p < a) {
          op = 1 - lift;
          y = -lift * vh * 0.16 * DEPTH[k];
          s = 1;
        }
        ops[k] = op;
        pieces[k].style.opacity = String(op);
        pieces[k].style.transform = `translateY(${y}px) scale(${s})`;
      });
      pieces.shadow.style.opacity = String(Math.max(ops.sofa * 0.9, ops.table * 0.5));
      $("cname").textContent = current;
      $("cnum").textContent = `0${placed} / 06`;
      tickEls.forEach((t, i) => t.classList.toggle("on", i < placed));
      const cOn = String(seg(p, 0.3, 0.33) * (1 - seg(p, 0.71, 0.735)));
      $("count").style.opacity = cOn;
      $("fig").style.opacity = cOn;

      // F3: BARCODE Living wordmark, mist band at the bottom, "Scroll to explore"
      const wOut = io(seg(p, 0.855, 0.91));
      letters.forEach((el, i) => {
        const t = out(seg(p, 0.72 + i * 0.009, 0.765 + i * 0.009));
        el.style.opacity = String(t * (1 - wOut));
        el.style.transform = `translateY(${(1 - t) * 50 - wOut * vh * (0.18 + i * 0.01)}px)`;
      });
      const lv = io(seg(p, 0.77, 0.82));
      $("lv").style.clipPath = `inset(-20% ${100 - lv * 100}% -20% 0)`;
      $("lv").style.opacity = String(1 - wOut);
      $("lv").style.transform = `translateY(${-wOut * vh * 0.26}px)`;
      $("scap").style.opacity = String(seg(p, 0.8, 0.83) * (1 - seg(p, 0.85, 0.87)));

      // mist: band rises (F3), fills the frame, then keeps rising and leaves clouds at the top (F4)
      const mb = $("mbody");
      const capH = (mb.firstElementChild as HTMLElement).offsetHeight;
      const yBand = vh * 0.8;
      const yHidden = vh * 1.02;
      const yFull = -capH * 0.9;
      const yEnd = -(capH + vh * 1.1) - capH * 0.35;
      const bIn = io(seg(p, 0.7, 0.8));
      let my = lerp(yHidden, yBand, bIn);
      my = lerp(my, yFull, io(seg(p, 0.845, 0.915)));
      my = lerp(my, yEnd, io(seg(p, 0.925, 0.985)));
      mb.style.transform = `translateY(${my}px)`;
      const mf = $("mfront");
      let fy = lerp(vh * 1.05, vh * 0.86, bIn);
      fy = lerp(fy, -mf.offsetHeight * 1.1, io(seg(p, 0.83, 0.9)));
      mf.style.transform = `translateY(${fy}px)`;
      mf.style.opacity = String(1 - seg(p, 0.89, 0.905));
      $("panel").style.opacity = String(seg(p, 0.915, 0.925));
      lines.forEach((l, i) => {
        const t = out(seg(p, 0.945 + i * 0.009, 0.975 + i * 0.009));
        l.style.opacity = String(t);
        l.style.transform = `translateY(${(1 - t) * 24}px)`;
      });

      // header theme: the section under the header decides; over the opening's mist/chalk panel it goes 'clear'
      let theme = "dark";
      for (const el of themed) {
        const b = el.getBoundingClientRect();
        if (b.top <= 42 && b.bottom > 42) {
          theme = el.dataset["header"]!;
          break;
        }
      }
      if (theme === "dark" && r.top <= 0 && r.bottom > 42 && p > 0.88) theme = "clear";
      hdr.classList.toggle("light", theme === "light");
      hdr.classList.toggle("clear", theme === "clear");
    }

    const trigger = ScrollTrigger.create({ start: 0, end: "max", onUpdate: frame, onRefresh: frame });
    const hintLine = gsap.fromTo(
      "#hintline",
      { scaleY: 0.25 },
      { scaleY: 1, duration: 1.4, ease: "none", repeat: -1 },
    );
    frame();
    return () => {
      trigger.kill();
      hintLine.kill();
    };
  }, []);

  return (
    <div className="v03">
      <a className="skip" href="#main">
        Skip to content
      </a>

      <V03Header />

      <main id="main">
        <section id="top" className="opening" data-header="dark" aria-label="Opening">
          <div className="stage">
            <div className="layer" id="win">
              <div className="room" id="room" role="img" aria-label="A living room in Dubai at sunset, furnished piece by piece">
                <img className="plate" src={roomEmpty} alt="" />
                {PIECES.map(([k, src]) => (
                  <img
                    key={k}
                    className={k === "shadow" ? "piece shadow" : "piece"}
                    data-k={k}
                    src={src}
                    alt=""
                    style={{ left: `${POS[k].l}%`, top: `${POS[k].t}%`, width: `${POS[k].w}%`, height: `${POS[k].h}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="layer tag" aria-hidden="true">
              <div id="tSans">Every space has a code. We read it.</div>
              <div id="tSerif">Every space has a code. We read it.</div>
            </div>
            <h1 className="sr">Every space has a code. We read it. BARCODE Living, interior design in Dubai.</h1>

            <div className="hint cap" id="hint">
              <span>Scroll to explore</span>
              <i id="hintline" />
            </div>

            <div className="layer brand" aria-hidden="true">
              <div className="bc" id="bc">
                {[..."BARCODE"].map((ch, i) => (
                  <span key={i}>{ch}</span>
                ))}
              </div>
              <div className="lv" id="lv">
                Living
              </div>
              <div className="scap cap" id="scap">
                Scroll to explore
              </div>
            </div>

            <div className="plate-fig cap" id="fig">
              Fig. 01 · Living room · extra pieces are placeholders
            </div>
            <div className="count cap" id="count">
              <span>Placing</span>
              <b id="cname">Rug</b>
              <span id="cnum">00 / 06</span>
              <span className="ticks" id="ticks">
                {ORDER.map(([k]) => (
                  <span key={k} />
                ))}
              </span>
            </div>

            <div className="layer panel" id="panel" />
            <div className="layer mist" aria-hidden="true">
              <div className="mfront" id="mfront">
                <img src={mistFront} alt="" />
              </div>
              <div className="mbody" id="mbody">
                <img src={mistBack} alt="" />
                <div className="solid" />
                <img className="flip" src={mistBack} alt="" />
              </div>
            </div>

            <div className="layer statement" id="story">
              <p id="sp">
                {STATEMENT.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
            </div>
          </div>
        </section>

        <FounderIntro />

        <div className="body-chalk" data-header="light">
          <div className="draft-grid" aria-hidden="true">
            {Array.from({ length: 12 }, (_, i) => (
              <i key={i} />
            ))}
          </div>

          <section id="services" className="wrap" aria-labelledby="svc-h">
            <div className="sheet">
              <CropMarks />
              <div className="sheet-head">
                <div>
                  <span className="meta">03 · What we do</span>
                  <h2 id="svc-h" className="h-display">
                    From four walls to <em>a point of view.</em>
                  </h2>
                </div>
                <span className="meta right">Services 01 — 04</span>
              </div>

              <div className="cards4">
                <article className="card">
                  <div className="ph r34">
                    <img src={phSunsetWindow} alt="Placeholder photo: living room with a view of the Dubai skyline at sunset" loading="lazy" />
                  </div>
                  <div className="card-meta mono">
                    <span>Index: 01</span>
                    <span>[Service name TBD]</span>
                  </div>
                  <h3 className="h-card">Complete spaces shaped from the first idea to the final detail.</h3>
                  <div className="fig mono">Fig. 03 · Placeholder</div>
                </article>
                <article className="card">
                  <div className="ph r34">
                    <img src={phEmpty} alt="Placeholder photo: an empty, sunlit apartment before styling" loading="lazy" />
                  </div>
                  <div className="card-meta mono">
                    <span>Index: 02</span>
                    <span>[Service name TBD]</span>
                  </div>
                  <h3 className="h-card">
                    Layouts, finishes, furniture and styling that give existing spaces a new direction.
                  </h3>
                  <div className="fig mono">Fig. 04 · Placeholder</div>
                </article>
                <article className="card">
                  <div className="ph r34">
                    <img src={matArt} alt="Placeholder photo: abstract artwork in burgundy and cream" loading="lazy" />
                  </div>
                  <div className="card-meta mono">
                    <span>Index: 03</span>
                    <span>[Service name TBD]</span>
                  </div>
                  <h3 className="h-card">Distinctive spaces designed to feel considered, memorable and effortless.</h3>
                  <div className="fig mono">Fig. 05 · Placeholder</div>
                </article>
                <article className="card">
                  <div className="ph r34">
                    <img src={phSunsetDoor} alt="Placeholder photo: sunlit corner of a short-stay apartment" loading="lazy" />
                  </div>
                  <div className="card-meta mono">
                    <span>Index: 04</span>
                    <span>[Service name TBD]</span>
                  </div>
                  <h3 className="h-card">Design-led Airbnb and property transformations built to stand out.</h3>
                  <div className="fig mono">Fig. 06 · Placeholder</div>
                </article>
              </div>

              <div className="swatches">
                <div className="swatch-head">
                  <span className="meta">Material palette · example only</span>
                  <span className="meta">Placeholder</span>
                </div>
                <div className="swatch-row">
                  {SWATCHES.map(([color, label]) => (
                    <div key={label} className="swatch">
                      <i style={{ background: color }} />
                      <b className="mono">{label}</b>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="process" className="wrap" aria-labelledby="proc-h">
            <div className="sheet">
              <CropMarks />
              <div className="sheet-head">
                <div>
                  <span className="meta">04 · Process</span>
                  <h2 id="proc-h" className="h-display">
                    How we work
                  </h2>
                </div>
                <span className="meta right">Four phases · to be confirmed</span>
              </div>
              <ol className="rows">
                <li className="row">
                  <span className="mono phase">Phase / 01</span>
                  <span className="thumb">
                    <img src={matRug} alt="" loading="lazy" />
                  </span>
                  <h3 className="h-row">Brief</h3>
                  <p>[What happens in this phase — TBD]</p>
                </li>
                <li className="row active">
                  <span className="mono phase">Phase / 02</span>
                  <span className="thumb">
                    <img src={matArt} alt="" loading="lazy" />
                  </span>
                  <h3 className="h-row">
                    Concept <span className="chip mono">In focus</span>
                  </h3>
                  <p>[What happens in this phase — TBD]</p>
                </li>
                <li className="row">
                  <span className="mono phase">Phase / 03</span>
                  <span className="thumb">
                    <img src={matTable} alt="" loading="lazy" />
                  </span>
                  <h3 className="h-row">Materials</h3>
                  <p>[What happens in this phase — TBD]</p>
                </li>
                <li className="row">
                  <span className="mono phase">Phase / 04</span>
                  <span className="thumb">
                    <img src={matLamp} alt="" loading="lazy" />
                  </span>
                  <h3 className="h-row">Styling</h3>
                  <p>[What happens in this phase — TBD]</p>
                </li>
              </ol>
            </div>
          </section>

          <section id="work" className="wrap" aria-labelledby="work-h">
            <div className="sheet">
              <CropMarks />
              <div className="sheet-head">
                <div>
                  <span className="meta">05 · Projects</span>
                  <h2 id="work-h" className="h-display">
                    Selected work
                  </h2>
                </div>
              </div>
              <div className="cards3">
                <article className="card work">
                  <div className="ph r34">
                    <img src={imperialLivingDining} alt="Living and dining room at Imperial Avenue by Barcode Living" loading="lazy" />
                  </div>
                  <span className="fig mono">Fig. 07</span>
                  <h3 className="h-work">Imperial Avenue</h3>
                  <Link className="tlink cap" to="/projects/$slug" params={{ slug: "imperial-avenue" }}>
                    View project <span aria-hidden="true">→</span>
                  </Link>
                </article>
                <article className="card work">
                  <div className="ph r34">
                    <img src={bldCrescentBedroom} alt="Bedroom at BLD Crescent by Barcode Living" loading="lazy" />
                  </div>
                  <span className="fig mono">Fig. 08</span>
                  <h3 className="h-work">BLD Crescent</h3>
                </article>
                <article className="card work">
                  <div className="ph r34">
                    <img src={beachMansionLiving} alt="Living room at Beach Mansion 1408 by Barcode Living" loading="lazy" />
                  </div>
                  <span className="fig mono">Fig. 09</span>
                  <h3 className="h-work">Beach Mansion 1408</h3>
                </article>
              </div>
            </div>
          </section>

          <V03Contact />
        </div>

        <V03Footer />
      </main>
    </div>
  );
}
