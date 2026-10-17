"use client";

import { useEffect, useRef } from "react";

export default function ScrollLine() {
  const ref = useRef(null);

  useEffect(() => {
    const line = ref.current;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      line.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div ref={ref} className="scroll-line" aria-hidden="true" />;
}
