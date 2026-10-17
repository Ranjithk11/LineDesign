"use client";

import Reveal from "./Reveal";
import SlideDeck from "./SlideDeck";
import { useEnquiry } from "./EnquiryProvider";
import { MATERIALS } from "@/lib/site";

export default function Materials() {
  const { chooseMaterial } = useEnquiry();

  return (
    <section className="block" id="materials" style={{ paddingTop: 20 }}>
      <div className="wrap">
        <header className="sec-head">
          <Reveal>
            <p className="kicker">02 — Materials</p>
            <h2>Ten surfaces. One bench.</h2>
          </Reveal>
          <Reveal className="lede" delay="80ms">
            Choose a material and the enquiry form opens with it already named. Call if you would rather talk it through.
          </Reveal>
        </header>
        <SlideDeck className="mat-deck" label="Materials">
          {MATERIALS.map((item) => (
            <button
              key={item.value}
              className="mat-card"
              type="button"
              onClick={() => chooseMaterial(item.value)}
            >
              <span className="mat-photo">
                <img src={item.image} alt="" />
              </span>
              <span className="mat-copy">
                <span className="mat-no">{item.no}</span>
                <span className="mat-name">{item.name}</span>
                <span className="mat-note">{item.note}</span>
                <span className="mat-go">Enquire</span>
              </span>
            </button>
          ))}
        </SlideDeck>
      </div>
    </section>
  );
}
