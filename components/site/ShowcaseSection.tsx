import Image from "next/image";
import { BuyButton } from "./BuyButton";

export function ShowcaseSection() {
  return (
    <section className="showcase section">
      <div className="shell showcase-grid">
        <div className="page-stack" aria-label="Preview pages from the guide">
          <Image
            className="stack-page stack-one"
            src="/images/ebook-summary.jpg"
            alt="Guide summary page"
            width={530}
            height={829}
            sizes="(max-width: 800px) 46vw, 300px"
          />
          <Image
            className="stack-page stack-two"
            src="/images/ebook-welcome.jpg"
            alt="Guide chapter page"
            width={530}
            height={829}
            sizes="(max-width: 800px) 46vw, 300px"
          />
          <Image
            className="stack-page stack-three"
            src="/images/ebook-cover.jpg"
            alt="Guide cover"
            width={530}
            height={829}
            sizes="(max-width: 800px) 46vw, 300px"
          />
        </div>
        <div className="showcase-copy">
          <p className="section-index">03 — The starter pack</p>
          <h2>
            Your Airlie life.
            <br />
            <em>All in one guide.</em>
          </h2>
          <p className="lead">Not another generic Australia travel guide.</p>
          <p>
            A practical guide created specifically for backpackers who want to
            arrive prepared, find their feet faster and make the most of their
            time in paradise.
          </p>
          <BuyButton label="Get the starter pack" />
        </div>
      </div>
    </section>
  );
}
