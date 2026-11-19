import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site-content";

export function AboutSection() {
  return (
    <section className="about section" id="about">
      <div className="shell about-grid">
        <div className="about-photo">
          <div className="about-sun" />
          <Image
            src="/images/laurine-transparent.png"
            alt="Laurine, creator of the Airlie Beach Backpacker Starter Pack"
            width={420}
            height={560}
            sizes="(max-width: 750px) 70vw, 420px"
          />
          <span className="hand-note">
            from backpacker
            <br />
            to backpacker ♡
          </span>
        </div>
        <div className="about-copy">
          <p className="section-index">05 — Meet your local friend</p>
          <h2>
            Hey, I’m
            <br />
            <em>Laurine.</em>
          </h2>
          <p className="lead">I came to Airlie Beach as a backpacker too.</p>
          <p>
            After figuring out accommodation, work, transport, where to go and
            how to actually enjoy Airlie without wasting money, I decided to put
            everything I learned into one simple guide.
          </p>
          <p className="about-final">
            So you don’t have to figure it all out the hard way.
          </p>
          <a
            className="text-link"
            href={site.instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            {site.instagramHandle} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
