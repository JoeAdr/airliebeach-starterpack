import Image from "next/image";
import { Check, Download } from "lucide-react";
import { BuyButton } from "./BuyButton";
import { site } from "@/lib/site-content";

export function OfferSection() {
  return (
    <section className="offer section" id="offer">
      <Image
        className="offer-bg"
        src="/images/whitehaven.jpg"
        alt="Whitehaven Beach in the Whitsundays"
        fill
        sizes="100vw"
      />
      <div className="offer-overlay" />
      <div className="shell offer-inner">
        <div className="offer-copy">
          <p className="eyebrow">Your shortcut to settling in</p>
          <h2>
            Ready for
            <br />
            <em>Airlie?</em>
          </h2>
          <p>Arrive with a plan, not a list of unanswered questions.</p>
        </div>
        <div className="offer-card">
          <p className="offer-kicker">Airlie Beach</p>
          <h3>
            Backpacker
            <br />
            Starter Pack
          </h3>
          <ul>
            {site.offerIncludes.map((item) => (
              <li key={item}>
                <Check /> {item}
              </li>
            ))}
            <li>
              <Check /> {site.edition}
            </li>
          </ul>
          <p className="price">{site.price}</p>
          <BuyButton light label="Get instant access" />
          <p className="secure">
            <Download size={14} /> Secure payment · Instant access
          </p>
        </div>
      </div>
    </section>
  );
}
