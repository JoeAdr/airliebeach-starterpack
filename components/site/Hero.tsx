import Image from "next/image";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { BuyButton } from "./BuyButton";
import { site } from "@/lib/site-content";

export function Hero() {
  return (
    <section className="hero" id="top">
      <Image
        className="hero-bg"
        src="/images/hero-sunset.jpg"
        alt="Ocean horizon at sunset"
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-wash" />
      <div className="hero-inner shell">
        <div className="hero-copy">
          <p className="eyebrow">The backpacker’s guide to Airlie Beach</p>
          <h1>
            Airlie Beach
            <br />
            <em>Backpacker</em>
            <br />
            Starter Pack
          </h1>
          <p className="hero-promise">Find a job. Save money. Enjoy paradise.</p>
          <p className="hero-desc">
            Everything you need to know before arriving — from finding work and
            accommodation to discovering the best local spots.
          </p>
          <BuyButton />
          <p className="micro">
            <Download size={14} /> {site.microFacts[0]} <span /> {site.edition}{" "}
            <span /> {site.microFacts[1]}
          </p>
        </div>
        <div
          className="hero-product"
          aria-label="Airlie Beach Backpacker Starter Pack ebook"
        >
          <div className="sun-orbit" />
          <div className="phone-mock">
            <Image
              src="/images/ebook-welcome.jpg"
              alt="Welcome to Airlie Beach ebook page"
              fill
              sizes="220px"
            />
          </div>
          <div className="book-mock">
            <Image
              src="/images/ebook-cover.jpg"
              alt="Airlie Beach Backpacker Starter Pack cover"
              fill
              priority
              sizes="(max-width: 600px) 240px, 370px"
            />
          </div>
          <div className="product-note">
            <Sparkles size={16} /> Made by a backpacker
            <br />
            who actually lived it
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#story" aria-label="Scroll to discover">
        <ArrowDown size={17} />
      </a>
    </section>
  );
}
