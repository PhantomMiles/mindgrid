"use client";

import { Bell, Search, Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";
import { ToggleSwitch } from "@/components/ui/ToggleSwitch";
import { Avatar } from "@/components/ui/Avatar";
import { currentLearner } from "@/lib/mock-data";
import { useState, useEffect } from "react";

export function Topbar() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
      <div className="neu-inset flex min-h-[44px] w-full max-w-sm items-center gap-2 rounded-neu-sm px-3">
        <Search className="h-4 w-4 shrink-0 text-ink-muted" aria-hidden="true" />
        <label htmlFor="mg-search" className="sr-only">
          Search courses and mentors
        </label>
        <input
          id="mg-search"
          type="search"
          placeholder="Search courses, mentors..."
          className="w-full bg-transparent text-sm text-ink placeholder:text-ink-muted focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <div className="hidden items-center gap-2 sm:flex">
          <Sun className="h-4 w-4 text-ink-muted" aria-hidden="true" />
          <ToggleSwitch
            checked={mounted ? theme === "dark" : true}
            onChange={toggleTheme}
            label="Toggle dark mode"
          />
          <Moon className="h-4 w-4 text-ink-muted" aria-hidden="true" />
        </div>

        <button
          type="button"
          aria-label="Notifications"
          className="focus-ring neu-raised-sm neu-interactive relative flex h-11 w-11 items-center justify-center rounded-neu-sm text-ink-secondary hover:text-ink"
        >
          <Bell className="h-[18px] w-[18px]" aria-hidden="true" />
          <span
            className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-danger"
            aria-hidden="true"
          />
        </button>

        <Avatar initials={currentLearner.initials} />
      </div>
    </header>
  );
}
