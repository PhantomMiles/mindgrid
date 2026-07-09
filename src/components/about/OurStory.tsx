const TIMELINE = [
  {
    year: "2023",
    title: "The problem becomes personal",
    body: "Our founder meets a software engineer in Lagos who taught herself to code on a borrowed phone — and still couldn't afford a structured course to level up. MindGrid starts as a question: what if the course was just free?",
  },
  {
    year: "2024",
    title: "First cohort, first instructors",
    body: "Four volunteer instructors. Thirty learners. A Google Meet link and a shared Google Drive folder. The tech stack is almost embarrassingly simple — but learners finish the courses, and some land jobs.",
  },
  {
    year: "2025",
    title: "Community funding model takes shape",
    body: "Rather than seek venture capital, MindGrid launches a community scholarship fund. Donors pay it forward; learners pay nothing. The model works — and feels right.",
  },
  {
    year: "2026",
    title: "Platform launch",
    body: "MindGrid moves off spreadsheets and onto a purpose-built platform: structured courses, mentor sessions, impact tracking, and leaderboards. Still free. Still volunteer-led. Still growing.",
  },
];

export function OurStory() {
  return (
    <section className="w-full mb-16">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
          Our story
        </h2>
        <p className="mt-4 text-ink-secondary">
          How a borrowed phone and a stubborn question became a platform.
        </p>
      </div>

      {/* Timeline */}
      <ol className="relative flex flex-col gap-0" aria-label="MindGrid history">
        {TIMELINE.map((entry, idx) => (
          <li key={entry.year} className="flex gap-6 group">
            {/* Spine */}
            <div className="flex flex-col items-center">
              <div className="neu-inset flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-accent tabular-nums">
                {entry.year}
              </div>
              {idx < TIMELINE.length - 1 && (
                <div
                  className="mt-1 w-px flex-1 bg-border"
                  aria-hidden="true"
                />
              )}
            </div>

            {/* Content */}
            <div className="pb-10">
              <h3 className="font-display font-semibold text-ink leading-snug">
                {entry.title}
              </h3>
              <p className="mt-2 text-sm text-ink-secondary leading-relaxed">
                {entry.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
