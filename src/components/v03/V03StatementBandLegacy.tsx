// v0.3's "Elevated, but never staged." band; no longer rendered on the homepage, kept for reference.
export function V03StatementBandLegacy() {
  return (
    <section className="wrap band-wrap" aria-label="Statement">
      <div className="band">
        <div className="band-frame" aria-hidden="true" />
        <div className="band-meta mono">
          <span>06 · The studio</span>
          <span>BARCODE Living</span>
        </div>
        <p className="band-text">
          <span>Elevated,</span>
          <span className="i1">but never</span>
          <span className="i2">
            <em>staged.</em>
          </span>
        </p>
        <div className="band-meta mono bottom">
          <span>Apartments · Holiday homes · Short-stay</span>
          <span>Dubai</span>
        </div>
      </div>
    </section>
  );
}
