import { Quote, Star } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";

const SAMPLE_TESTIMONIALS = [
  {
    initials: "CO",
    name: "Chidera O.",
    role: "Data Analytics Graduate",
    rating: 5,
    quote:
      "The mentor-led SQL and Python paths on MindGrid gave me the confidence to apply for data roles. Having real-time feedback from Wale made all the difference in my capstone projects.",
  },
  {
    initials: "FA",
    name: "Femi A.",
    role: "Web Development Graduate",
    rating: 5,
    quote:
      "I completed the Software Engineering track and built the AI Study Companion. Learning Git and APIs by collaborating on open-source projects was a game-changer.",
  },
  {
    initials: "NE",
    name: "Ngozi E.",
    role: "Business & Strategy Student",
    rating: 5,
    quote:
      "Understanding small business finance and digital marketing without having to pay heavy tuition allowed me to scale my online design store. Excellent structured content.",
  },
];

export function Testimonials() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs font-bold uppercase tracking-wider text-accent-strong mb-2.5">
          LEARNER SUCCESS STORIES
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
          What our community is building
        </h2>
        <p className="mt-4 text-ink-secondary leading-relaxed">
          Read feedback from learners who transitioned to tech, launched businesses, or mastered new skills.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SAMPLE_TESTIMONIALS.map((t) => (
          <figure key={t.name + t.role} className="neu-raised-sm p-6 flex flex-col justify-between hover:bg-surface-raised transition-colors group cursor-default">
            <div>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="text-sm text-ink-secondary leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>
            <figcaption className="flex items-center gap-3 pt-4 border-t border-border">
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
