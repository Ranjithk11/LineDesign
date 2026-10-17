import Reveal from "./Reveal";
import SlideDeck from "./SlideDeck";
import { STEPS } from "@/lib/site";

export default function Process() {
  return (
    <section className="process block" aria-labelledby="process-title">
      <div className="wrap">
        <p className="kicker light">How a job moves</p>
        <h2 id="process-title">From file to finished board.</h2>
        <SlideDeck className="steps-deck" trackClassName="steps" trackAs="ol" label="How a job moves">
          {STEPS.map((step) => (
            <Reveal as="li" key={step.index} delay={step.delay}>
              <p className="idx">{step.index}</p>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </Reveal>
          ))}
        </SlideDeck>
      </div>
    </section>
  );
}
