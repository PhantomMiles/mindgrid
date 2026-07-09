import { BookOpen, Clock, Users, LayoutGrid } from "lucide-react";
import { courses, instructors } from "@/lib/mock-data";
import { formatDuration, formatNumber } from "@/lib/utils";

const totalHours = courses.reduce((sum, c) => sum + c.durationMinutes, 0);
const totalLearners = instructors.reduce((sum, i) => sum + i.learnersReached, 0);
const totalCategories = new Set(courses.map((c) => c.category)).size;

const STATS = [
  {
    icon: BookOpen,
    value: `${courses.length}`,
    label: "Free courses",
    tone: "text-accent-strong",
  },
  {
    icon: LayoutGrid,
    value: `${totalCategories}`,
    label: "Subject areas",
    tone: "text-gold-dark",
  },
  {
    icon: Clock,
    value: formatDuration(totalHours),
    label: "Total content",
    tone: "text-success",
  },
  {
    icon: Users,
    value: `${formatNumber(totalLearners)}+`,
    label: "Learners reached",
    tone: "text-accent-strong",
  },
];

export function CoursesHero() {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink leading-tight">
          Every course.{" "}
          <span className="text-accent">Always free.</span>
        </h1>
        <p className="mt-5 text-lg text-ink-secondary">
          Structured curricula across Data, Communication, Software, and Life
          Skills — taught by working professionals, funded by our community.
        </p>
      </div>

      {/* Mini stats band */}
      <div className="neu-raised grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 mb-10">
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="flex flex-col items-center text-center gap-1.5">
              <div className={`neu-inset h-10 w-10 rounded-neu-sm flex items-center justify-center ${s.tone}`}>
                <Icon className="h-4.5 w-4.5" aria-hidden="true" />
              </div>
              <p className="font-display text-2xl font-bold text-ink tabular-nums">
                {s.value}
              </p>
              <p className="text-xs text-ink-muted">{s.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
