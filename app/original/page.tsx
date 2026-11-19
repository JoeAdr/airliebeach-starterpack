import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, ArrowRight, BriefcaseBusiness, Check, ChevronDown, Compass, Download, Home, MapPin, Palmtree, PiggyBank, Plane, Smartphone, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Original version | Airlie Beach Backpacker Starter Pack",
};

const SITE = {
  price: "$14.90 AUD",
  checkoutUrl: "#offer",
  instagramUrl: "https://www.instagram.com/laurinetraveltips",
  supportEmail: "mailto:hello@laurinetraveltips.com",
  edition: "2026 Edition",
};

const chapters = [
  ["01", "Welcome to Airlie Beach", "Why come to Airlie, what to expect and the overall vibe."],
  ["02", "Getting to Airlie", "Airport transfers, transport options and arrival tips."],
  ["03", "Where to stay", "Hostels, shared houses, apps and the best ways to find a place."],
  ["04", "Finding a job", "Where to apply, how it works and practical tips to get hired."],
  ["05", "Best spots in town", "Favourite cafés, restaurants, bars and places to chill."],
  ["06", "Free things to do", "Walks, the lagoon, sunsets and low-budget days."],
  ["07", "Must-do experiences", "Whitsundays, boat trips and tips for local discounts."],
];

const topics = [
  { icon: Home, title: "Where to stay", text: "Hostels, shared houses, useful apps and finding accommodation." },
  { icon: BriefcaseBusiness, title: "Find a job", text: "Where to apply and practical tips to help you get hired." },
  { icon: Plane, title: "Getting to Airlie", text: "Airport transfers, transport options and arrival tips." },
  { icon: MapPin, title: "Best spots", text: "Favourite cafés, restaurants, bars and places to chill." },
  { icon: Palmtree, title: "Free things to do", text: "Lagoon days, walks and sunsets without the big spend." },
  { icon: Compass, title: "Must-do experiences", text: "Whitsundays, boat trips and useful local tips." },
  { icon: PiggyBank, title: "Save money", text: "Simple backpacker advice for making your budget last." },
];

const faqs = [
  ["Is this guide only for backpackers?", "It is written with backpackers and Working Holiday travellers in mind, but anyone planning a practical, budget-conscious stay in Airlie Beach can use it."],
  ["When should I buy the guide?", "Before you arrive is best. It helps you plan accommodation, transport, work and your first days in town."],
  ["Can I read it on my phone?", "Yes. The guide is delivered as a PDF and can be read on your phone, tablet or laptop."],
  ["How do I receive the guide?", "You will receive instant download access after secure payment."],
  ["Is the information up to date?", "This is the 2026 edition. Because prices, opening hours and local services can change, always confirm time-sensitive details directly."],
  ["Can I share it with someone else?", "Each copy is licensed for personal use by the original purchaser and should not be redistributed."],
  ["What if I have trouble downloading it?", "Contact Laurine using the support link in the footer and she will help you access your purchase."],
];

function BuyButton({ label = `Get the guide — ${SITE.price}`, light = false }: { label?: string; light?: boolean }) {
  return <a className={`cta ${light ? "cta-light" : ""}`} href={SITE.checkoutUrl} data-event="ebook_purchase_click"><span>{label}</span><ArrowRight size={18} aria-hidden="true" /></a>;
}

export default function OriginalPage() {
  return (
    <main>
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Laurine Travel Tips home"><span className="brand-mark">L</span><span>Laurine<br />Travel Tips</span></a>
        <nav aria-label="Primary navigation"><a href="#inside">What’s inside</a><a href="#about">About</a><a href="#faq">FAQ</a></nav>
        <a className="nav-cta" href={SITE.checkoutUrl}>Get the guide</a>
      </header>

      <section className="hero" id="top">
        <Image className="hero-bg" src="/images/hero-sunset.jpg" alt="Ocean horizon at sunset" fill priority sizes="100vw" />
        <div className="hero-wash" />
        <div className="hero-inner shell">
          <div className="hero-copy">
            <p className="eyebrow">The backpacker’s guide to Airlie Beach</p>
            <h1>Airlie Beach<br /><em>Backpacker</em><br />Starter Pack</h1>
            <p className="hero-promise">Find a job. Save money. Enjoy paradise.</p>
            <p className="hero-desc">Everything you need to know before arriving — from finding work and accommodation to discovering the best local spots.</p>
            <BuyButton />
            <p className="micro"><Download size={14} /> Instant PDF download <span /> {SITE.edition} <span /> Read anywhere</p>
          </div>
          <div className="hero-product" aria-label="Airlie Beach Backpacker Starter Pack ebook">
            <div className="sun-orbit" />
            <div className="phone-mock"><Image src="/images/ebook-welcome.jpg" alt="Welcome to Airlie Beach ebook page" fill sizes="220px" /></div>
            <div className="book-mock"><Image src="/images/ebook-cover.jpg" alt="Airlie Beach Backpacker Starter Pack cover" fill priority sizes="(max-width: 600px) 240px, 370px" /></div>
            <div className="product-note"><Sparkles size={16} /> Made by a backpacker<br />who actually lived it</div>
          </div>
        </div>
        <a className="scroll-cue" href="#story" aria-label="Scroll to discover"><ArrowDown size={17} /></a>
      </section>

      <section className="story section" id="story"><div className="shell story-grid"><p className="section-index">01 — The reality</p><div><h2>Airlie Beach is paradise.<br /><em>Arriving unprepared isn’t.</em></h2><div className="question-row" aria-label="Common backpacker questions"><span>Where do I stay?</span><span>How do I find a job?</span><span>How much do I need?</span><span>Where should I go?</span></div><p className="story-close">Everything you wish you knew before arriving — in one place.</p></div></div></section>

      <section className="topics section"><div className="shell"><div className="section-heading"><p className="section-index">02 — Practical, not generic</p><h2>Everything I wish I knew<br /><em>before moving to Airlie.</em></h2></div><div className="topic-grid">{topics.map(({ icon: Icon, title, text }, index) => <article className={`topic topic-${index + 1}`} key={title}><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

      <section className="showcase section"><div className="shell showcase-grid"><div className="page-stack" aria-label="Preview pages from the guide"><Image className="stack-page stack-one" src="/images/ebook-summary.jpg" alt="Guide summary page" width={530} height={829} sizes="(max-width: 800px) 46vw, 300px" /><Image className="stack-page stack-two" src="/images/ebook-welcome.jpg" alt="Guide chapter page" width={530} height={829} sizes="(max-width: 800px) 46vw, 300px" /><Image className="stack-page stack-three" src="/images/ebook-cover.jpg" alt="Guide cover" width={530} height={829} sizes="(max-width: 800px) 46vw, 300px" /></div><div className="showcase-copy"><p className="section-index">03 — The starter pack</p><h2>Your Airlie life.<br /><em>All in one guide.</em></h2><p className="lead">Not another generic Australia travel guide.</p><p>A practical guide created specifically for backpackers who want to arrive prepared, find their feet faster and make the most of their time in paradise.</p><BuyButton label="Get the starter pack" /></div></div></section>

      <section className="inside section" id="inside"><div className="shell inside-grid"><div className="inside-intro"><p className="section-index">04 — Seven chapters</p><h2>What’s<br /><em>inside?</em></h2><p>From your first airport transfer to your first sunset drink — the useful local knowledge is already mapped out.</p><div className="inside-image"><Image src="/images/airlie-sign.jpg" alt="Welcome to Airlie Beach sign" fill sizes="(max-width: 850px) 100vw, 430px" /></div></div><ol className="chapter-list">{chapters.map(([number, title, text]) => <li key={number}><span className="chapter-num">{number}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowRight size={19} aria-hidden="true" /></li>)}</ol></div></section>

      <section className="about section" id="about"><div className="shell about-grid"><div className="about-photo"><div className="about-sun" /><Image src="/images/laurine-transparent.png" alt="Laurine, creator of the Airlie Beach Backpacker Starter Pack" width={420} height={560} sizes="(max-width: 750px) 70vw, 420px" /><span className="hand-note">from backpacker<br />to backpacker ♡</span></div><div className="about-copy"><p className="section-index">05 — Meet your local friend</p><h2>Hey, I’m<br /><em>Laurine.</em></h2><p className="lead">I came to Airlie Beach as a backpacker too.</p><p>After figuring out accommodation, work, transport, where to go and how to actually enjoy Airlie without wasting money, I decided to put everything I learned into one simple guide.</p><p className="about-final">So you don’t have to figure it all out the hard way.</p><a className="text-link" href={SITE.instagramUrl} target="_blank" rel="noreferrer">@LaurineTravelTips <ArrowRight size={16} /></a></div></div></section>

      <section className="preview section"><div className="shell"><div className="preview-heading"><div><p className="section-index">06 — A peek inside</p><h2>Have a look<br /><em>inside.</em></h2></div><p>Real pages from the guide. Tap any page to view it larger.</p></div><div className="preview-pages">{[["/images/ebook-cover.jpg", "Guide cover"], ["/images/ebook-summary.jpg", "Guide summary"], ["/images/ebook-welcome.jpg", "Welcome chapter"], ["/images/ebook-about.jpg", "Airlie Beach introduction"]].map(([src, alt], index) => <a href={src} target="_blank" rel="noreferrer" key={src} className={`preview-page page-${index + 1}`}><Image src={src} alt={alt} width={530} height={829} sizes="(max-width: 700px) 62vw, 280px" /></a>)}</div></div></section>

      <section className="offer section" id="offer"><Image className="offer-bg" src="/images/whitehaven.jpg" alt="Whitehaven Beach in the Whitsundays" fill sizes="100vw" /><div className="offer-overlay" /><div className="shell offer-inner"><div className="offer-copy"><p className="eyebrow">Your shortcut to settling in</p><h2>Ready for<br /><em>Airlie?</em></h2><p>Arrive with a plan, not a list of unanswered questions.</p></div><div className="offer-card"><p className="offer-kicker">Airlie Beach</p><h3>Backpacker<br />Starter Pack</h3><ul><li><Check /> Complete Airlie Beach guide</li><li><Check /> Practical local tips</li><li><Check /> Instant PDF download</li><li><Check /> Read on any device</li><li><Check /> {SITE.edition}</li></ul><p className="price">{SITE.price}</p><BuyButton light label="Get instant access" /><p className="secure"><Download size={14} /> Secure payment · Instant access</p></div></div></section>

      <section className="faq section" id="faq"><div className="shell faq-grid"><div><p className="section-index">07 — Good to know</p><h2>Before you<br /><em>download.</em></h2></div><div className="accordion">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="final-cta"><Image src="/images/hero-sunset.jpg" alt="Tropical ocean at sunset" fill sizes="100vw" /><div className="final-overlay" /><div className="final-copy"><p>Find a job. Save money. Enjoy paradise.</p><h2>Paradise is waiting.<br /><em>Arrive prepared.</em></h2><BuyButton label="Get the Airlie Beach starter pack" light /></div></section>

      <footer><div className="shell footer-grid"><div className="footer-brand"><span className="brand-mark">L</span><div><strong>Laurine Travel Tips</strong><br /><a href={SITE.instagramUrl}>@LaurineTravelTips</a></div></div><div className="footer-links"><a href={SITE.supportEmail}>Contact</a><a href="#">Terms</a><a href="#">Privacy</a><a href="#">Copyright</a></div><p>© 2026 Laurine Travel Tips.<br />All rights reserved.</p></div></footer>
      <a className="mobile-buy" href={SITE.checkoutUrl}><Smartphone size={17} /> Get the guide — {SITE.price}</a>
    </main>
  );
}
