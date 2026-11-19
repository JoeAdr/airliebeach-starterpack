import { site } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer>
      <div className="shell footer-grid">
        <div className="footer-brand">
          <span className="brand-mark">{site.brandMark}</span>
          <div>
            <strong>{site.brandName}</strong>
            <br />
            <a href={site.instagramUrl}>{site.instagramHandle}</a>
          </div>
        </div>
        <div className="footer-links">
          <a href={site.supportEmail}>Contact</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Copyright</a>
        </div>
        <p>
          © 2026 {site.brandName}.
          <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
