"use client";

import { useEffect, useState } from "react";
import LogoMark from "./LogoMark";
import { NAV, PHONES } from "@/lib/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = NAV.map((item) => document.querySelector(item.href)).filter(Boolean);
    if (!("IntersectionObserver" in window)) return undefined;
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setActive("#" + entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => spy.observe(section));
    return () => spy.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="nav">
      <a className="brand" href="#top" aria-label="LINE Designer Boards, home">
        <LogoMark />
        <span>
          <strong>LINE</strong>
          <em>Designer Boards</em>
        </span>
      </a>
      <nav className={open ? "nav-links open" : "nav-links"} aria-label="Primary">
        {NAV.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={active === item.href ? "is-on" : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <a className="nav-call" href={`tel:${PHONES[0].tel}`}>
        {PHONES[0].display}
      </a>
      <button
        className="nav-toggle"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
