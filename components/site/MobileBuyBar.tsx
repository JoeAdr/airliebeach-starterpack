import { Smartphone } from "lucide-react";
import { site } from "@/lib/site-content";

export function MobileBuyBar() {
  return (
    <a className="mobile-buy" href={site.checkoutUrl}>
      <Smartphone size={17} /> Get the guide — {site.price}
    </a>
  );
}
