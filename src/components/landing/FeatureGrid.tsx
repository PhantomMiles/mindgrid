import { BookOpen, ShieldCheck, Users } from "lucide-react";

const FEATURES = [
  {
    icon: BookOpen,
    tone: "text-accent-strong",
    title: "Real courses, real mentors",
    description:
      "Structured curricula across Data, Communication, Software, and Life Skills — taught by working professionals, not just video lectures.",
  },
  {
    icon: ShieldCheck,
    tone: "text-gold-dark",
    title: "Free, funded by community",
    description:
      "Every course is paid for by donors, not learners. No paywalls, no upsells — access stays free as MindGrid grows.",
  },
  {
    icon: Users,
    tone: "text-success",
    title: "Mentorship, not just content",
    description:
      "Live Q&A sessions, community leaderboards, and direct mentor access — learning that doesn't leave you stuck alone.",
  },
];

export function FeatureGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
          Everything you need to learn
        </h2>
        <p className="mt-4 text-ink-secondary">
          Courses, mentorship, and progress tracking — built for learners who
          are serious about finishing what they start.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FEATURES.map((f) => {
          const Icon = f.icon;
          return (
            <div key={f.title} className="neu-raised-sm neu-interactive p-7 text-left">
              <div
                className={`neu-inset w-12 h-12 rounded-neu-sm flex items-center justify-center mb-6 ${f.tone}`}
              >
                <Icon className="w-5.5 h-5.5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-display font-semibold text-ink mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {f.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
