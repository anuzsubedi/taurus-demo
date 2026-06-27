import { contactEmail, contactHref, contactPhone } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer>
      <div className="container footer-inner">
        <div>
          <strong>NEXUS</strong> by Taurus Ai -{" "}
          <span>Windsor, Ontario</span>
        </div>
        <div>
          <a href={contactHref}>{contactEmail}</a>
          <span className="footer-dot">&middot;</span>
          <span>{contactPhone}</span>
        </div>
      </div>
    </footer>
  );
}
