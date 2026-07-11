"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { CoursesHero } from "@/components/courses/CoursesHero";
import { CourseFilters } from "@/components/courses/CourseFilters";
import { CourseGrid } from "@/components/courses/CourseGrid";
import { courses } from "@/lib/mock-data";

function CoursesPageContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  // Initialize from search parameter if present, else default to "All"
  const [activeCategory, setActiveCategory] = useState("All");

  // Keep state in sync with URL changes
  useMemo(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory("All");
    }
  }, [categoryParam]);

  // Derive unique categories in the order they first appear in the data
  const categories = useMemo(
    () => [...new Set(courses.map((c) => c.category))],
    []
  );

  const filtered =
    activeCategory === "All"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <CoursesHero />

      <div className="flex flex-col gap-8">
        {/* Toolbar row */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-semibold text-ink">
              Browse courses
              <span className="ml-2 text-base font-normal text-ink-muted">
                ({filtered.length})
              </span>
            </h2>
          </div>
          {/* Scrollable filter row on small screens */}
          <div className="overflow-x-auto scrollbar-hide pb-1">
            <CourseFilters
              categories={categories}
              activeCategory={activeCategory}
              onFilter={setActiveCategory}
            />
          </div>
        </div>

        <CourseGrid courses={filtered} />
      </div>
    </main>
  );
}

export default function CoursesPage() {
  return (
    <div className="flex flex-col items-center overflow-x-clip">
      <MarketingHeader />
      <Suspense fallback={
        <div className="w-full max-w-7xl mx-auto px-4 py-32 text-center text-ink-muted">
          Loading courses...
        </div>
      }>
        <CoursesPageContent />
      </Suspense>
      <MarketingFooter />
    </div>
  );
}
