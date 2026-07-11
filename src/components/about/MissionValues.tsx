import { Eye, Heart, Scale, Users, GraduationCap, LifeBuoy } from "lucide-react";

const VALUES = [
  {
    icon: Eye,
    tone: "text-accent-strong",
    title: "Radical transparency",
    description:
      "Every dollar donated, every learner funded, every scholarship unlocked — we publish it all. You should know exactly where your support goes.",
  },
  {
    icon: Heart,
    tone: "text-gold-dark",
    title: "Community-powered",
    description:
      "MindGrid doesn't run on VC money or paid subscriptions. It runs on people who believe education should be free deciding to make it happen.",
  },
  {
    icon: Scale,
    tone: "text-success",
    title: "No paywall, ever",
    description:
      "Every course on MindGrid is free. Not free with a catch, not free for a trial — permanently free, for every learner, no questions asked.",
  },
  {
    icon: Users,
    tone: "text-accent-strong",
    title: "Mentorship, not just content",
    description:
      "Live Q&As and real mentor access — we measure success by learners who finish and land roles, not video-completion rates.",
  },
  {
    icon: GraduationCap,
    tone: "text-gold-dark",
    title: "Built for first-gen learners",
    description:
      "Plain language and real context, for people who are often the first in their family to pursue this path.",
  },
  {
    icon: LifeBuoy,
    tone: "text-success",
    title: "Support that doesn't end at graduation",
    description:
      "Alumni community, continued mentor access, and ongoing support — we stay with learners past course completion.",
  },
];

export function MissionValues() {
  return (
    <section className="w-full mb-16">
      <div className="text-center max-w-xl mx-auto mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent-strong mb-3">
          Why MindGrid
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
          What we stand for
        </h2>
        <p className="mt-4 text-ink-secondary">
          Six commitments that shape every decision we make.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {VALUES.map((v) => {
          const Icon = v.icon;
          return (
            <div key={v.title} className="neu-raised-sm neu-interactive p-7 text-left">
              <div
                className={`neu-inset w-12 h-12 rounded-neu-sm flex items-center justify-center mb-6 ${v.tone}`}
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-display font-semibold text-ink mb-2">
                {v.title}
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {v.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
