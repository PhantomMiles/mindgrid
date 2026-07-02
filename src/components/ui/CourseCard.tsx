import { BookOpen, CheckCircle2 } from "lucide-react";
import { Course } from "@/types";
import { cn, formatDuration } from "@/lib/utils";
import { ProgressBar } from "./ProgressBar";

interface CourseCardProps {
  course: Course;
  className?: string;
}

const toneGradient: Record<Course["coverTone"], string> = {
  indigo: "linear-gradient(160deg,#7c8bff,#4a55c4)",
  gold: "linear-gradient(160deg,#f6d9a0,#b8873e)",
  teal: "linear-gradient(160deg,#5fd6c4,#2a9184)",
  rose: "linear-gradient(160deg,#f29fb0,#c05a72)",
};

export function CourseCard({ course, className }: CourseCardProps) {
  const percent = Math.round((course.completedLessons / course.totalLessons) * 100);
  const isComplete = percent === 100;

  return (
    <article className={cn("neu-raised-sm neu-interactive group w-full overflow-hidden p-0", className)}>
      {/* Skeuomorphic "book cover" header — subtle page-stack depth on hover */}
      <div
        className="relative h-28 overflow-hidden rounded-t-neu-sm px-4 py-3"
        style={{ background: toneGradient[course.coverTone] }}
      >
        <div
          className="absolute right-0 top-0 h-full w-2 bg-black/10 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
        <div
          className="absolute right-1.5 top-0 h-full w-1.5 bg-black/10 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
        <BookOpen className="h-5 w-5 text-white/85" aria-hidden="true" />
        <p className="mt-2 line-clamp-2 font-display text-sm font-semibold leading-snug text-white">
          {course.title}
        </p>
        {course.free ? (
          <span className="absolute bottom-2 right-2 rounded-full bg-black/25 px-2 py-0.5 text-[10px] font-semibold text-white">
            Free
          </span>
        ) : null}
      </div>

      <div className="p-4">
        <p className="text-xs text-ink-muted">{course.category}</p>
        <p className="mt-0.5 text-xs text-ink-secondary">with {course.mentor}</p>

        <div className="mt-3 flex items-center justify-between text-xs text-ink-muted">
          <span>
            {course.completedLessons}/{course.totalLessons} lessons
          </span>
          <span>{formatDuration(course.durationMinutes)}</span>
        </div>

        <div className="mt-2">
          <ProgressBar percent={percent} label={`${course.title} progress`} />
        </div>

        {isComplete ? (
          <p className="mt-2 flex items-center gap-1 text-[11px] font-medium text-success">
            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
            Completed
          </p>
        ) : (
          <p className={cn("mt-2 text-[11px] font-medium text-ink-muted")}>
            {percent}% complete
          </p>
        )}
      </div>
    </article>
  );
}
