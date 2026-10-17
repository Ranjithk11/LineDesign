"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";

export default function SlideDeck({
  children,
  className = "",
  trackClassName = "",
  label = "Slides",
  trackAs: Track = "div",
}) {
  const trackRef = useRef(null);
  const items = Children.toArray(children);
  const [index, setIndex] = useState(0);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 820px)");
    const sync = () => setMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const slides = [...track.children];
    if (!slides.length) return;
    const mid = track.getBoundingClientRect().left + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    slides.forEach((slide, i) => {
      const rect = slide.getBoundingClientRect();
      const dist = Math.abs(rect.left + rect.width / 2 - mid);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setIndex((current) => (current === best ? current : best));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    measure();
    track.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      track.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  function go(next) {
    const track = trackRef.current;
    if (!track) return;
    const slides = [...track.children];
    const target = Math.max(0, Math.min(slides.length - 1, next));
    const slide = slides[target];
    if (!slide) return;
    const delta = slide.getBoundingClientRect().left - track.getBoundingClientRect().left;
    const pad = parseFloat(getComputedStyle(track).scrollPaddingLeft) || 0;
    const left = track.scrollLeft + delta - pad;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left, behavior: reduced ? "auto" : "smooth" });
  }

  function onKey(event) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(index + 1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(index - 1);
    }
  }

  const progress = items.length ? (index + 1) / items.length : 0;

  return (
    <div className={className ? `deck ${className}` : "deck"}>
      <Track
        ref={trackRef}
        className={trackClassName ? `deck-track ${trackClassName}` : "deck-track"}
        aria-label={label}
        aria-roledescription={mobile ? "carousel" : undefined}
        tabIndex={mobile ? 0 : undefined}
        onKeyDown={mobile ? onKey : undefined}
      >
        {items}
      </Track>
      <div className="deck-bar">
        <button
          className="deck-arrow"
          type="button"
          aria-label="Previous slide"
          onClick={() => go(index - 1)}
          disabled={index === 0}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path d="M15 5 8 12l7 7" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
        <div className="deck-progress" aria-hidden="true">
          <span style={{ "--p": progress }} />
        </div>
        <p className="deck-count">
          {String(index + 1).padStart(2, "0")}
          <span> / {String(items.length).padStart(2, "0")}</span>
        </p>
        <button
          className="deck-arrow"
          type="button"
          aria-label="Next slide"
          onClick={() => go(index + 1)}
          disabled={index === items.length - 1}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
