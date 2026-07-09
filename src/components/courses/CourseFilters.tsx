"use client";

import { cn } from "@/lib/utils";
import { Course } from "@/types";

interface CourseFiltersProps {
  categories: string[];
  activeCategory: string;
  onFilter: (category: string) => void;
}

export function CourseFilters({
  categories,
  activeCategory,
  onFilter,
}: CourseFiltersProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter courses by category"
      className="flex flex-wrap gap-2"
    >
      {["All", ...categories].map((cat) => {
        const active = activeCategory === cat;
        return (
          <button
            key={cat}
            role="tab"
            aria-selected={active}
            id={`filter-tab-${cat.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
            onClick={() => onFilter(cat)}
            className={cn(
              "focus-ring rounded-neu-sm px-4 py-2 text-sm font-medium transition-all duration-150 whitespace-nowrap",
              active
                ? "neu-pressed text-accent"
                : "neu-raised-sm neu-interactive text-ink-secondary hover:text-ink"
            )}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
