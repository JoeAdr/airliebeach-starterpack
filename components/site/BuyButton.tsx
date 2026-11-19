import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site-content";

export function BuyButton({
  label = `Get the guide — ${site.price}`,
  light = false,
}: {
  label?: string;
  light?: boolean;
}) {
  return (
    <a
      className={`cta ${light ? "cta-light" : ""}`}
      href={site.checkoutUrl}
      data-event="ebook_purchase_click"
    >
      <span>{label}</span>
      <ArrowRight size={18} aria-hidden="true" />
    </a>
  );
}
