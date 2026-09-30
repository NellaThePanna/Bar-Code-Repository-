import portrait from "@/assets/v03/arpita-kaur.webp";
import interiorDetail from "@/assets/v03/interior-detail-stitch.webp";
import materialDetail from "@/assets/v03/material-detail-stitch.webp";

const BADGES = ["Founder, Barcode Living", "Apartments, holiday homes & short-stay", "Interiors with a fashion eye"];

function Arrow({ className, d }: { className: string; d: [string, string] }) {
  return (
    <svg className={`fi-arrow ${className}`} viewBox="0 0 64 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d={d[0]} strokeLinecap="round" />
      <path d={d[1]} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FounderIntro() {
  return (
    <div id="founder" className="fi" data-header="light">
      <section className="fi-hero" aria-labelledby="fi-h">
        <div className="fi-title">
          <h2 id="fi-h" className="fi-display">
            Hello, <span className="fi-im">i&rsquo;m</span> Arpita
          </h2>
          <p className="fi-sub">Founder, Barcode Living</p>
        </div>

        <div className="fi-stage">
          <div className="fi-notes fi-notes-left">
            <div className="fi-note">
              <p>Founder, Barcode Living</p>
              <Arrow className="fi-arrow-l1" d={["M4 14 C 28 8, 48 16, 56 34", "M48 30 L 56 34 L 54 26"]} />
            </div>
            <div className="fi-note fi-note-2">
              <p>Apartments, holiday homes &amp; short-stay</p>
              <Arrow className="fi-arrow-l2" d={["M6 38 C 24 40, 44 32, 54 12", "M46 16 L 54 12 L 56 20"]} />
            </div>
          </div>

          <figure className="fi-portrait">
            <div className="fi-portrait-img">
              <img src={portrait} alt="Arpita Kaur, founder of Barcode Living" />
            </div>
            <figcaption className="fi-cap">Fig. 01 · Arpita Kaur, founder</figcaption>
          </figure>

          <div className="fi-notes fi-notes-right">
            <div className="fi-note">
              <Arrow className="fi-arrow-r1" d={["M58 10 C 38 12, 20 20, 10 36", "M12 28 L 10 36 L 18 36"]} />
              <p>Interiors with a fashion eye</p>
            </div>
            <div className="fi-cta">
              <a className="fi-btn" href="#contact">
                Talk to us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="fi-badges">
          {BADGES.map((b) => (
            <p key={b} className="fi-badge">
              {b}
            </p>
          ))}
          <a className="fi-btn fi-btn-block" href="#contact">
            Talk to us <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="fi-bio" aria-labelledby="fi-bio-h">
        <div className="fi-bio-grid">
          <div className="fi-bio-copy">
            <div className="fi-kicker">
              <span className="fi-rule" aria-hidden="true" />
              <span>A personal note</span>
            </div>
            <h2 id="fi-bio-h" className="fi-h">
              Interiors with a fashion eye and a designer&rsquo;s discipline
            </h2>
            <div className="fi-paras">
              <p>
                I design interiors that make you look twice. I come at it with a fashion eye: good proportions, great
                textures, one statement piece that owns the room. And I know when to stop.
              </p>
              <p>Most spaces don’t need more. They need the one thing that’s missing. Finding it is where the fun starts.</p>
              <p>Behind me is a team that makes it happen, from the first mood board to the final styling.</p>
            </div>
            <div className="fi-sign">
              <p className="fi-sig" aria-hidden="true">
                Arpita Kaur
              </p>
              <p className="fi-sub fi-sig-title">Founder, Barcode Living</p>
            </div>
            <div className="fi-bio-cta">
              <a className="fi-btn" href="#contact">
                Talk to us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="fi-polaroids">
            <figure className="fi-polaroid">
              <div className="fi-polaroid-img fi-r34">
                <img
                  src={interiorDetail}
                  alt="Placeholder photo: ribbed travertine wall panel beside a timber-lined doorway"
                  loading="lazy"
                />
              </div>
              <figcaption className="fi-cap">Fig. 02 · Interior detail · Placeholder</figcaption>
            </figure>
            <figure className="fi-polaroid fi-polaroid-2">
              <div className="fi-polaroid-img fi-r11">
                <img
                  src={materialDetail}
                  alt="Placeholder photo: bouclé fabric swatch on fluted walnut and veined marble"
                  loading="lazy"
                />
              </div>
              <figcaption className="fi-cap">Fig. 03 · Material detail · Placeholder</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}
