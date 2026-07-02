import { NeuCard } from "@/components/ui/NeuCard";
import { CourseCard } from "@/components/ui/CourseCard";
import { Course } from "@/types";

interface ContinueLearningCardProps {
  courses: Course[];
}

export function ContinueLearningCard({ courses }: ContinueLearningCardProps) {
  return (
    <NeuCard className="h-full">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-ink">
          Continue learning
        </h2>
        <a
          href="/courses"
          className="focus-ring rounded-neu-sm text-xs font-semibold text-accent hover:text-accent-strong"
        >
          View all
        </a>
      </div>
      <div className="scrollbar-hide -mx-1 flex gap-4 overflow-x-auto px-1 pb-1">
        {courses.map((course) => (
          <div key={course.id} className="w-64 shrink-0">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </NeuCard>
  );
}
