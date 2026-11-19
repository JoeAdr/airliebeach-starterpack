import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site-content";

export function FaqSection() {
  return (
    <section className="faq section" id="faq">
      <div className="shell faq-grid">
        <div>
          <p className="section-index">07 — Good to know</p>
          <h2>
            Before you
            <br />
            <em>download.</em>
          </h2>
        </div>
        <div className="accordion">
          {faqs.map(({ question, answer }) => (
            <details key={question}>
              <summary>
                {question}
                <ChevronDown aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
