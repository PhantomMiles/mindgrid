import { UserPlus, Compass, Users2, Award } from "lucide-react";

const STEPS = [
  {
    icon: UserPlus,
    title: "Create your account",
    description: "Sign up free in under a minute — no credit card, no trial period.",
  },
  {
    icon: Compass,
    title: "Pick a learning path",
    description: "Browse courses across Data, Communication, Software, and Life Skills.",
  },
  {
    icon: Users2,
    title: "Learn with a mentor",
    description: "Join live sessions and get direct feedback from working professionals.",
  },
  {
    icon: Award,
    title: "Finish and get certified",
    description: "Complete your course and add a verifiable certificate to your profile.",
  },
];

export function HowItWorks() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-xs font-bold uppercase tracking-wider text-accent-strong mb-2.5">
          STEP-BY-STEP PROCESS
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
          How MindGrid works
        </h2>
        <p className="mt-4 text-ink-secondary">
          From sign-up to certificate, in four steps.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="neu-raised-sm p-6 relative">
              <span
                className="skeu-metal-gold absolute -top-3 -left-3 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-[#3a2a0f]"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <div className="neu-inset w-11 h-11 rounded-neu-sm flex items-center justify-center mb-5 text-accent-strong">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-display font-semibold text-ink mb-1.5">
                {step.title}
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
