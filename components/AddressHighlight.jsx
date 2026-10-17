import { ADDRESS, MAPS_URL } from "@/lib/site";

export default function AddressHighlight() {
  return (
    <address className="address">
      <span className="address-label">Studio address</span>
      <a href={MAPS_URL}>
        {ADDRESS.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </a>
    </address>
  );
}
