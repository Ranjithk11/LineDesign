import Reveal from "./Reveal";
import SlideDeck from "./SlideDeck";
import { CRAFT } from "@/lib/site";

export default function Craft() {
  return (
    <section className="block" id="craft" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <header className="sec-head">
          <Reveal>
            <p className="kicker">01 — Craft</p>
            <h2>Routing, laser, and carving.</h2>
          </Reveal>
          <Reveal className="lede" delay="80ms">
            All types of cutting and carving. The drawing decides the path. The material decides the finish.
          </Reveal>
        </header>
        <SlideDeck className="craft-deck" trackClassName="craft-list" label="Craft">
          {CRAFT.map((item) => (
            <article className={item.reverse ? "craft reverse" : "craft"} key={item.index}>
              <Reveal className="frame craft-visual">
                <img src={item.image} alt={item.alt} loading="lazy" />
              </Reveal>
              <Reveal className="craft-copy" delay="90ms">
                <p className="idx">{item.index}</p>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </Reveal>
            </article>
          ))}
        </SlideDeck>
      </div>
    </section>
  );
}
