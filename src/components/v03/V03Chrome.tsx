import monoCream from "@/assets/v03/logo-monogram-cream.webp";
import monoBurgundy from "@/assets/v03/logo-monogram-burgundy.webp";
import matSofa from "@/assets/v03/mat-sofa.webp";
import matPlant from "@/assets/v03/mat-plant.webp";
import matTable from "@/assets/v03/mat-table.webp";
import matLamp from "@/assets/v03/mat-lamp.webp";

// `home` prefixes in-page anchors so the same chrome works on pages other than the homepage.
type ChromeProps = { home?: string };

export function CropMarks() {
  return (
    <>
      <span className="cm tl" />
      <span className="cm tr" />
      <span className="cm bl" />
      <span className="cm br" />
    </>
  );
}

export function V03Header({ home = "", light = false }: ChromeProps & { light?: boolean }) {
  return (
    <header id="hdr" className={light ? "hdr light" : "hdr"}>
      <a className="hdr-brand" href={`${home}#top`} aria-label="BARCODE Living, home">
        <img className="mono mono-light" src={monoCream} alt="" />
        <img className="mono mono-dark" src={monoBurgundy} alt="" />
      </a>
      <nav className="hdr-nav cap" aria-label="Main">
        <a href={`${home}#story`}>Story</a>
        <a href={`${home}#services`}>Services</a>
        <a href={`${home}#work`}>Projects</a>
        <a href={`${home}#process`}>Interior</a>
      </nav>
      <a className="hdr-talk cap" href="#contact">
        <span>Talk to us</span>
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
          <path d="M3.5 2h2.6l1.3 3.2-1.6 1.1a8 8 0 0 0 3.9 3.9l1.1-1.6L14 9.9v2.6A1.5 1.5 0 0 1 12.5 14 10.5 10.5 0 0 1 2 3.5 1.5 1.5 0 0 1 3.5 2z" />
        </svg>
      </a>
    </header>
  );
}

export function V03Contact() {
  return (
    <section id="contact" className="wrap" aria-labelledby="close-h">
      <div className="sheet closing">
        <CropMarks />
        <div className="sheet-head thin">
          <span className="meta">07 · Talk to us</span>
          <span className="meta right">Enquiries</span>
        </div>
        <figure className="pin p1">
          <img src={matSofa} alt="" loading="lazy" />
          <figcaption className="mono">Ref. 01 · Placeholder</figcaption>
        </figure>
        <figure className="pin p2">
          <img src={matPlant} alt="" loading="lazy" />
          <figcaption className="mono">Ref. 02 · Placeholder</figcaption>
        </figure>
        <figure className="pin p3">
          <img src={matTable} alt="" loading="lazy" />
          <figcaption className="mono">Ref. 03 · Placeholder</figcaption>
        </figure>
        <figure className="pin p4">
          <img src={matLamp} alt="" loading="lazy" />
          <figcaption className="mono">Ref. 04 · Placeholder</figcaption>
        </figure>
        <div className="close-core">
          <span className="meta">Apartments · holiday homes · short-stay properties</span>
          <h2 id="close-h" className="h-close">
            Let's shape
            <br />
            your <em>space.</em>
          </h2>
          <a className="btn" href="#contact">
            Start a project <span aria-hidden="true">→</span>
          </a>
          <span className="mono note">[Contact form / WhatsApp / email — TBD]</span>
        </div>
        <div className="sheet-foot mono">
          <span>[Response time — TBD]</span>
          <span>Dubai</span>
        </div>
      </div>
    </section>
  );
}

export function V03Footer({ home = "" }: ChromeProps) {
  return (
    <footer className="foot" data-header="dark">
      <div className="foot-top">
        <div className="foot-brand">
          <img src={monoCream} alt="BARCODE Living" className="foot-mono" />
          <p className="foot-word">
            BARCODE <span>Living</span>
          </p>
          <p className="foot-line">
            We design apartments, holiday homes and short-stay properties with a fashion eye and a designer's
            discipline.
          </p>
        </div>
        <div className="foot-cols">
          <div>
            <span className="mono foot-h">Studio</span>
            <a href={`${home}#story`}>Story</a>
            <a href={`${home}#services`}>Services</a>
            <a href={`${home}#work`}>Projects</a>
            <a href={`${home}#process`}>Process</a>
          </div>
          <div>
            <span className="mono foot-h">Contact</span>
            <span>[Address — TBD]</span>
            <span>[Email — TBD]</span>
            <span>[Phone — TBD]</span>
          </div>
          <div>
            <span className="mono foot-h">Social</span>
            <span>[Instagram — TBD]</span>
            <span>[LinkedIn — TBD]</span>
          </div>
        </div>
      </div>
      <div className="foot-bottom">
        <span className="mono">© 2026 BARCODE Living · [Legal entity name — TBD]</span>
        <table className="title-block mono" aria-hidden="true">
          <tbody>
            <tr>
              <td>
                <b>BARCODE Living</b>
              </td>
              <td>Sheet 01 / 01</td>
              <td>Scale 1:1</td>
            </tr>
            <tr>
              <td colSpan={2}>Location: Dubai, UAE</td>
              <td>Homepage v0.3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </footer>
  );
}
