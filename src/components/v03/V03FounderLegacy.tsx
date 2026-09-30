import founderImg from "@/assets/v03/founder-placeholder.webp";

// v0.3's original founder section; no longer rendered (replaced by FounderIntro), kept for reference.
export function V03FounderLegacy() {
  return (
    <section id="founder" className="founder" data-header="dark" aria-labelledby="founder-h">
      <div>
        <span className="cap eyebrow">02 · The founder</span>
        <h2 id="founder-h">Arpita Kaur</h2>
        <div className="role">Founder of Barcode Living &amp; House Of Mitti</div>
        <p className="bio">
          I design interiors that make you look twice. I come at it with a fashion eye: good proportions, great
          textures, one statement piece that owns the room. And I know when to stop.
        </p>
        <p className="bio">
          Most spaces don't need more. They need the one thing that's missing. Finding it is where the fun starts.
        </p>
        <p className="bio">Behind me is a team that makes it happen, from the first mood board to the final styling.</p>
        <div className="sig" aria-hidden="true">
          Arpita Kaur.
        </div>
      </div>
      <figure className="founder-photo">
        <div className="frame">
          <img id="fimg" src={founderImg} alt="Placeholder photo: founder portrait (real photo to come)" />
        </div>
        <figcaption className="fplate">
          <span>Fig. 02 · Founder portrait</span>
          <span>Placeholder</span>
        </figcaption>
      </figure>
    </section>
  );
}
