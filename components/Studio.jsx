import Reveal from "./Reveal";
import { EMAIL } from "@/lib/site";

export default function Studio() {
  return (
    <section className="block" id="studio">
      <div className="wrap studio-grid">
        <Reveal className="plate">
          <img
            src="/images/line-logo-mark.jpg"
            alt="LINE monogram: a black L with a cutter path, on golden yellow"
          />
          <div className="plate-caption">
            <strong>LINE</strong>
            <span>Designer Boards</span>
            <em>the designer&apos;s choice</em>
          </div>
        </Reveal>
        <Reveal className="studio-copy" delay="80ms">
          <p className="kicker">04 — Studio</p>
          <h2>Ar. Sajjan, on Shamshabad Road.</h2>
          <p>
            The studio specialises in all types of cutting and carving for people who already know the material they want. Wood, metal, stone, acrylic, and composite — brought to one bench.
          </p>
          <address className="address">
            Beside Neha Suiting &amp; Shirting, Opp. MRM Stone
            <br />
            Gaganpahad, Shamshabad Road
            <br />
            Hyderabad, Rangareddy, Telangana
            <br />
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </address>
        </Reveal>
      </div>
    </section>
  );
}
