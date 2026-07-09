import { BookOpen, Users } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { formatNumber } from "@/lib/utils";
import { Instructor } from "@/lib/mock-data";

interface InstructorCardProps {
  instructor: Instructor;
}

export function InstructorCard({ instructor: ins }: InstructorCardProps) {
  return (
    <article
      id={`instructor-${ins.slug}`}
      className="neu-raised-sm neu-interactive flex flex-col gap-5 p-6"
    >
      {/* Avatar + name */}
      <div className="flex items-center gap-4">
        <Avatar initials={ins.initials} size="lg" highlight />
        <div>
          <p className="font-display font-semibold text-ink">{ins.name}</p>
          <p className="text-xs text-accent-strong mt-0.5">{ins.title}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm text-ink-secondary leading-relaxed">{ins.bio}</p>

      {/* Expertise tags */}
      <div className="flex flex-wrap gap-2">
        {ins.expertise.map((tag) => (
          <span
            key={tag}
            className="neu-inset rounded-full px-3 py-1 text-[11px] font-medium text-ink-secondary"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Stats row */}
      <div className="flex items-center justify-between border-t border-border pt-4 text-xs text-ink-muted">
        <span className="flex items-center gap-1.5">
          <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
          {ins.coursesTaught} course{ins.coursesTaught !== 1 ? "s" : ""}
        </span>
        <span className="flex items-center gap-1.5">
          <Users className="h-3.5 w-3.5" aria-hidden="true" />
          {formatNumber(ins.learnersReached)} learners reached
        </span>
      </div>
    </article>
  );
}
