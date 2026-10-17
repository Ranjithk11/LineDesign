import { MARQUEE } from "@/lib/site";

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <p>{MARQUEE}</p>
        <p>{MARQUEE}</p>
      </div>
    </div>
  );
}
