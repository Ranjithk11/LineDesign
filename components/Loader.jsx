"use client";

import { useEffect } from "react";

export default function Loader() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(
      () => document.documentElement.classList.add("loaded"),
      reduced ? 0 : 1050
    );
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="loader" aria-hidden="true">
      <div className="loader-mark">
        <strong>LINE</strong>
        <i />
      </div>
    </div>
  );
}
