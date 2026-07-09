import { Heart, Lightbulb } from "lucide-react";
import { instructors } from "@/lib/mock-data";
import { formatNumber } from "@/lib/utils";

const totalLearners = instructors.reduce((sum, i) => sum + i.learnersReached, 0);

export function InstructorsHero() {
  return (
    <section className="text-center max-w-2xl mx-auto mb-14">
      {/* Badge */}
      <div className="neu-raised-sm inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gold-dark mb-8">
        <Heart className="w-4 h-4" aria-hidden="true" />
        <span>Volunteer mentors, real expertise</span>
      </div>

      <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink leading-tight">
        Meet the{" "}
        <span className="text-accent">people behind</span>{" "}
        MindGrid
      </h1>
      <p className="mt-5 text-lg text-ink-secondary">
        Every instructor volunteers their time to bring professional-grade
        teaching to learners who couldn't otherwise access it.{" "}
        <strong className="text-ink font-semibold">
          {formatNumber(totalLearners)}+ learners reached so far.
        </strong>
      </p>
    </section>
  );
}
