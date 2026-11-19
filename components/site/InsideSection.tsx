import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { chapters } from "@/lib/site-content";

export function InsideSection() {
  return (
    <section className="inside section" id="inside">
      <div className="shell inside-grid">
        <div className="inside-intro">
          <p className="section-index">04 — Seven chapters</p>
          <h2>
            What’s
            <br />
            <em>inside?</em>
          </h2>
          <p>
            From your first airport transfer to your first sunset drink — the
            useful local knowledge is already mapped out.
          </p>
          <div className="inside-image">
            <Image
              src="/images/airlie-sign.jpg"
              alt="Welcome to Airlie Beach sign"
              fill
              sizes="(max-width: 850px) 100vw, 430px"
            />
          </div>
        </div>
        <ol className="chapter-list">
          {chapters.map(({ number, title, text }) => (
            <li key={number}>
              <span className="chapter-num">{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <ArrowRight size={19} aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
