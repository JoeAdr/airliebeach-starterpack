import { storyQuestions } from "@/lib/site-content";

export function StorySection() {
  return (
    <section className="story section" id="story">
      <div className="shell story-grid">
        <p className="section-index">01 — The reality</p>
        <div>
          <h2>
            Airlie Beach is paradise.
            <br />
            <em>Arriving unprepared isn’t.</em>
          </h2>
          <div className="question-row" aria-label="Common backpacker questions">
            {storyQuestions.map((question) => (
              <span key={question}>{question}</span>
            ))}
          </div>
          <p className="story-close">
            Everything you wish you knew before arriving — in one place.
          </p>
        </div>
      </div>
    </section>
  );
}
