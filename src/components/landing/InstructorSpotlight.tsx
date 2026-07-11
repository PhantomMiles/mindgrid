import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InstructorCard } from "@/components/instructors/InstructorCard";
import { instructors } from "@/lib/mock-data";

const SPOTLIGHT_SLUGS = ["tunde-bakare", "grace-nwosu", "wale-adebayo"];

export function InstructorSpotlight() {
  const spotlighted = SPOTLIGHT_SLUGS.map((slug) =>
    instructors.find((i) => i.slug === slug)
  ).filter((i): i is NonNullable<typeof i> => Boolean(i));

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent-strong mb-3">
          Meet the Mentors
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
          Real professionals, volunteering real time
        </h2>
        <p className="mt-4 text-ink-secondary">
          Every MindGrid instructor works in the field they teach — not just
          a face on a video.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {spotlighted.map((instructor) => (
          <InstructorCard key={instructor.id} instructor={instructor} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/instructors"
          className="focus-ring inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong hover:text-accent transition-colors"
        >
          Meet all instructors
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
