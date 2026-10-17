"use client";

import { useState } from "react";
import { useEnquiry } from "./EnquiryProvider";
import { EMAIL, MAPS_URL, MATERIALS, PHONES, WHATSAPP_URL } from "@/lib/site";

export default function Contact() {
  const { material, setMaterial, detailsRef } = useEnquiry();
  const [status, setStatus] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Material: ${data.get("material")}`,
      "",
      String(data.get("details") || ""),
    ];
    const href =
      `mailto:${EMAIL}?subject=` +
      encodeURIComponent(`Cutting enquiry — ${data.get("material")}`) +
      "&body=" +
      encodeURIComponent(lines.join("\n"));
    setStatus("Your email app should open with this enquiry. You can also call the studio.");
    window.location.href = href;
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-panel">
        <p className="kicker light">Contact</p>
        <h2>Bring the drawing.</h2>
        <ul className="phones">
          {PHONES.map((phone) => (
            <li key={phone.tel}>
              <a href={`tel:${phone.tel}`}>{phone.display}</a>
            </li>
          ))}
        </ul>
        <div className="contact-meta">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={WHATSAPP_URL}>WhatsApp the studio</a>
          <a href={MAPS_URL}>Open the studio on Maps</a>
        </div>
      </div>
      <form className="contact-form" onSubmit={onSubmit}>
        <h3>Send an enquiry</h3>
        <p className="form-note">This opens an email to the studio, ready to send.</p>
        <div className="form-grid">
          <label className="field">
            <span>Name</span>
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label className="field">
            <span>Phone</span>
            <input name="phone" type="tel" autoComplete="tel" required />
          </label>
          <label className="field field-wide">
            <span>Material</span>
            <select name="material" value={material} onChange={(event) => setMaterial(event.target.value)}>
              <option>Not sure yet</option>
              {MATERIALS.map((item) => (
                <option key={item.value}>{item.value}</option>
              ))}
            </select>
          </label>
          <label className="field field-wide">
            <span>The job</span>
            <textarea
              ref={detailsRef}
              name="details"
              required
              placeholder="Sizes, quantity, and what the piece is for."
            />
          </label>
        </div>
        <button className="btn" type="submit">
          Email the studio
        </button>
        <p className="form-status" role="status">
          {status}
        </p>
      </form>
    </section>
  );
}
