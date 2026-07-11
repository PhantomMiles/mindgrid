import { Course } from "@/types";
import { PublicCourseCard } from "@/components/courses/PublicCourseCard";

interface CourseGridProps {
  courses: Course[];
}

export function CourseGrid({ courses }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <div className="neu-raised-sm flex flex-col items-center justify-center py-20 text-center">
        <p className="text-lg font-display font-semibold text-ink">
          No courses found
        </p>
        <p className="mt-2 text-sm text-ink-muted">
          Try a different category filter.
        </p>
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      aria-label="Course list"
    >
      {courses.map((course) => (
        <PublicCourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
