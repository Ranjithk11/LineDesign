import Reveal from "./Reveal";
import SlideDeck from "./SlideDeck";
import { WORK } from "@/lib/site";

export default function Work() {
  return (
    <section id="work">
      <div className="wrap block" style={{ paddingBottom: 28 }}>
        <header className="sec-head">
          <Reveal>
            <p className="kicker">03 — Surfaces</p>
            <h2>What a cut can become.</h2>
          </Reveal>
          <Reveal className="lede" delay="80ms">
            Panels, edges, metal, and stone. The kind of work the bench is set up to do.
          </Reveal>
        </header>
      </div>
      <figure className="work-hero">
        <img
          src="/images/feature-wall.jpg"
          alt="A fluted timber and pale panel feature wall in a quiet interior"
          loading="lazy"
        />
        <figcaption>
          <strong>Fluted panels</strong>
          <span>Teak &amp; MDF</span>
        </figcaption>
      </figure>
      <div className="wrap" style={{ paddingBottom: 96 }}>
        <SlideDeck className="work-deck" trackClassName="work-grid" label="Surfaces">
          {WORK.map((item) => (
            <Reveal as="figure" key={item.title} delay={item.delay}>
              <div className="frame">
                <img src={item.image} alt={item.alt} loading="lazy" />
              </div>
              <figcaption>
                <strong>{item.title}</strong>
                <span>{item.meta}</span>
              </figcaption>
            </Reveal>
          ))}
        </SlideDeck>
      </div>
    </section>
  );
}
