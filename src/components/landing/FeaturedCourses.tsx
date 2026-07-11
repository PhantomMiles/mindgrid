import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PublicCourseCard } from "@/components/courses/PublicCourseCard";
import { courses } from "@/lib/mock-data";

// One course per a spread of categories, rather than the first 3 records —
// gives a fairer preview of catalog breadth than just c1/c2/c3.
const FEATURED_IDS = ["c3", "c1", "c25", "c29"];

export function FeaturedCourses() {
  const featured = FEATURED_IDS.map((id) => courses.find((c) => c.id === id)).filter(
    (c): c is NonNullable<typeof c> => Boolean(c)
  );

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-strong mb-3">
            Featured Courses
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
            A sample of what&apos;s free
          </h2>
        </div>
        <Link
          href="/courses"
          className="focus-ring inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong hover:text-accent transition-colors shrink-0"
        >
          View all courses
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {featured.map((course) => (
          <PublicCourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
