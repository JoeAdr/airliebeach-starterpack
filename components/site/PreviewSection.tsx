import Image from "next/image";
import { previewPages } from "@/lib/site-content";

export function PreviewSection() {
  return (
    <section className="preview section">
      <div className="shell">
        <div className="preview-heading">
          <div>
            <p className="section-index">06 — A peek inside</p>
            <h2>
              Have a look
              <br />
              <em>inside.</em>
            </h2>
          </div>
          <p>Real pages from the guide. Tap any page to view it larger.</p>
        </div>
        <div className="preview-pages">
          {previewPages.map(({ src, alt }, index) => (
            <a
              href={src}
              target="_blank"
              rel="noreferrer"
              key={src}
              className={`preview-page page-${index + 1}`}
            >
              <Image
                src={src}
                alt={alt}
                width={530}
                height={829}
                sizes="(max-width: 700px) 62vw, 280px"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
