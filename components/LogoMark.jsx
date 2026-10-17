export default function LogoMark({ tone = "gold" }) {
  const onGold = tone === "gold";
  const plate = onGold ? "#F5C400" : "#141414";
  const stroke = onGold ? "#141414" : "#F5C400";
  const cut = onGold ? "#F5C400" : "#141414";

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" fill={plate} />
      <path fill={stroke} d="M14 10h18v32h22v14H14z" />
      <path fill={cut} d="M19 16h7v33h18v-7H26V16z" />
      <circle cx="46" cy="45.5" r="2.35" fill={stroke} />
      <circle cx="46" cy="45.5" r="1.15" fill={cut} />
    </svg>
  );
}
