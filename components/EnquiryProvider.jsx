"use client";

import { createContext, useContext, useRef, useState } from "react";

const EnquiryContext = createContext(null);

export function EnquiryProvider({ children }) {
  const [material, setMaterial] = useState("Not sure yet");
  const detailsRef = useRef(null);

  function chooseMaterial(value) {
    setMaterial(value);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("contact")?.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "start",
    });
    window.setTimeout(() => detailsRef.current?.focus({ preventScroll: true }), 700);
  }

  return (
    <EnquiryContext.Provider value={{ material, setMaterial, chooseMaterial, detailsRef }}>
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) throw new Error("useEnquiry must be used inside EnquiryProvider");
  return context;
}
