import { Search, Flame, BookOpen, TrendingUp } from "lucide-react";

/**
 * A hand-built browser-chrome mockup of the dashboard, rather than a static
 * screenshot file — avoids depending on a real screenshot asset (which goes
 * stale the moment the dashboard UI changes) and keeps this fully on-brand.
 */
export function AppPreview() {
  return (
    <section className="w-6xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
          An interface that feels like yours
        </h2>
        <p className="mt-4 text-ink-secondary">
          Track streaks, see your progress, and pick up right where you left
          off — no clutter, no distractions.
        </p>
      </div>

      <div className="neu-raised p-2 sm:p-3">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-3 py-2.5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-danger/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-warning/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
          </div>
          <div className="neu-inset flex-1 flex items-center gap-2 rounded-full px-3 py-1.5 ml-2">
            <Search className="h-3.5 w-3.5 text-ink-muted" aria-hidden="true" />
            <span className="text-xs text-ink-muted">mindgrid.org/dashboard</span>
          </div>
        </div>

        {/* Mock dashboard content */}
        <div className="rounded-neu-sm bg-bg p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="neu-raised-sm sm:col-span-2 p-5 flex flex-col justify-between">
            <div>
              <p className="font-display text-lg font-semibold text-ink">
                Welcome back, Amara
              </p>
              <p className="text-xs text-ink-secondary mt-1">
                71% toward your weekly goal
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <span className="neu-raised-sm inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold text-warning">
                <Flame className="h-3 w-3" aria-hidden="true" />
                12-day streak
              </span>
            </div>
          </div>

          <div className="neu-raised-sm p-5 flex flex-col items-center justify-center gap-2">
            <div className="skeu-metal-gold h-14 w-14 rounded-full flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-[#3a2a0f]" aria-hidden="true" />
            </div>
            <span className="text-xs font-medium text-ink-muted">71% weekly goal</span>
          </div>

          <div className="neu-raised-sm sm:col-span-3 p-5">
            <p className="text-xs font-semibold text-ink-muted mb-3">
              Continue learning
            </p>
            <div className="flex gap-3 overflow-hidden">
              {["Data Literacy", "Spoken English", "Web Development"].map((t) => (
                <div
                  key={t}
                  className="neu-inset flex-1 min-w-0 rounded-neu-sm p-3 flex items-center gap-2"
                >
                  <BookOpen className="h-3.5 w-3.5 shrink-0 text-accent-strong" aria-hidden="true" />
                  <span className="text-[11px] font-medium text-ink truncate">
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
