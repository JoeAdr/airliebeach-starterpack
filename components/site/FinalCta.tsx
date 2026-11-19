import Image from "next/image";
import { BuyButton } from "./BuyButton";

export function FinalCta() {
  return (
    <section className="final-cta">
      <Image
        src="/images/hero-sunset.jpg"
        alt="Tropical ocean at sunset"
        fill
        sizes="100vw"
      />
      <div className="final-overlay" />
      <div className="final-copy">
        <p>Find a job. Save money. Enjoy paradise.</p>
        <h2>
          Paradise is waiting.
          <br />
          <em>Arrive prepared.</em>
        </h2>
        <BuyButton label="Get the Airlie Beach starter pack" light />
      </div>
    </section>
  );
}
