import LogoMark from "./LogoMark";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <a className="brand" href="#top">
          <LogoMark tone="ink" />
          <span>
            <strong>LINE</strong>
            <em>Designer Boards</em>
          </span>
        </a>
        <small>CNC router &amp; laser cutting · Gaganpahad, Hyderabad · © 2026</small>
      </div>
    </footer>
  );
}
