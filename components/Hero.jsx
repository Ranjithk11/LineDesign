export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-card">
        <p className="eyebrow">CNC Router &amp; Laser Cutting</p>
        <div className="hero-center">
          <h1 className="mask">
            <span>LINE</span>
          </h1>
          <p className="word-sub mask">
            <span>Designer Boards</span>
          </p>
          <p className="tagline mask">
            <span>the designer&apos;s choice</span>
          </p>
        </div>
        <div className="hero-foot">
          <p>
            Gaganpahad, Shamshabad Road
            <br />
            Hyderabad, Telangana
          </p>
          <div className="hero-actions">
            <a className="btn" href="#materials">
              The materials
            </a>
            <a className="btn btn-ghost" href="#contact">
              Talk to Ar. Sajjan
            </a>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <img
          src="/images/hero-cnc-teak.jpg"
          alt="A CNC router cutting a smooth curve into a thick teak board"
          fetchPriority="high"
        />
        <span className="crop tl" aria-hidden="true" />
        <span className="crop tr" aria-hidden="true" />
        <span className="crop bl" aria-hidden="true" />
        <span className="crop br" aria-hidden="true" />
        <p className="chip">Teak · CNC router</p>
      </div>
    </section>
  );
}
