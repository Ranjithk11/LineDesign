import Reveal from "./Reveal";
import { STATS } from "@/lib/site";

export default function Intro() {
  return (
    <section className="block" aria-labelledby="intro-title">
      <div className="wrap intro-grid">
        <Reveal className="intro-copy">
          <p className="kicker">The studio</p>
          <h2 id="intro-title">Boards, cut to the drawing.</h2>
          <p>
            LINE Designer Boards is Ar. Sajjan’s cutting studio on Shamshabad Road. CNC routing, laser cutting, and carving — across the materials architects and interior designers specify.
          </p>
          <ul className="stats">
            {STATS.map((item) => (
              <li key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="frame intro-visual">
          <img
            src="/images/material-boards.jpg"
            alt="Stacked designer sheets: MDF, plywood, and acrylic on a studio table"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}
