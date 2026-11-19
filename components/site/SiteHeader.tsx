import { site } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="nav-wrap">
      <a className="brand" href="#top" aria-label={`${site.brandName} home`}>
        <span className="brand-mark">{site.brandMark}</span>
        <span>
          Laurine
          <br />
          Travel Tips
        </span>
      </a>
      <nav aria-label="Primary navigation">
        {site.nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href={site.checkoutUrl}>
        Get the guide
      </a>
    </header>
  );
}
