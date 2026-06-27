import { contactHref, samplesHref } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-pill">
        <a className="logo" href="#top" aria-label="NEXUS by Taurus Ai">
          NEXUS <span>by Taurus Ai</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#options">Packages</a>
          <a href={samplesHref}>Samples</a>
          <a href="#process">Process</a>
        </nav>
        <a className="btn header-contact" href={contactHref}>
          Contact
        </a>
      </div>
    </header>
  );
}
