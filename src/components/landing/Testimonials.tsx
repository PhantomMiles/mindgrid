import { Quote } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";

/**
 * NOTE: these are illustrative placeholder quotes, not real learners.
 * Do not ship to production as-is — a nonprofit site showing fabricated
 * testimonials risks misleading visitors and donors. Replace with real
 * quotes only after getting explicit consent from actual learners to use
 * their name/words publicly.
 */
const SAMPLE_TESTIMONIALS = [
  {
    initials: "CO",
    name: "Sample learner",
    role: "Data Literacy course",
    quote:
      "Placeholder: describe how a real course/mentor helped a real learner here, once you have a quote you're allowed to publish.",
  },
  {
    initials: "FA",
    name: "Sample learner",
    role: "Web Development course",
    quote:
      "Placeholder: swap in an actual learner's words and get their sign-off before this goes live.",
  },
  {
    initials: "NE",
    name: "Sample learner",
    role: "Spoken English course",
    quote:
      "Placeholder: real testimonials build trust; fabricated ones can backfire if discovered — don't skip the consent step.",
  },
];

export function Testimonials() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-2xl mx-auto mb-4">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
          What learners say
        </h2>
      </div>
      <p className="text-center text-xs text-warning font-medium mb-10">
        Placeholder content — replace with real, consented learner quotes before launch.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SAMPLE_TESTIMONIALS.map((t) => (
          <figure key={t.name + t.role} className="neu-raised-sm p-6">
            <Quote className="h-5 w-5 text-accent-strong/60 mb-4" aria-hidden="true" />
            <blockquote className="text-sm text-ink-secondary leading-relaxed">
              {t.quote}
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <Avatar initials={t.initials} size="sm" />
              <div>
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-ink-muted">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
