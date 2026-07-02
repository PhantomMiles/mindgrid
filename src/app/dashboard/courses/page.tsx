import { CourseCard } from "@/components/ui/CourseCard";
import { courses } from "@/lib/mock-data";

export default function CoursesPage() {
  return (
    <div className="py-6">
      <h1 className="font-display text-2xl font-semibold text-ink">
        All courses
      </h1>
      <p className="mt-1 text-sm text-ink-secondary">
        Every course on MindGrid is free, funded by the community.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course) => (
          <div key={course.id} className="w-full">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}
