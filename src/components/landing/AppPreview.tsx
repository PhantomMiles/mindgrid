import { Search, Flame, BookOpen, TrendingUp } from "lucide-react";
import Image from "next/image";

/**
 * A hand-built browser-chrome mockup of the dashboard, presented inside a
 * laptop-frame mockup (bezel + hinge + base), rather than a static
 * screenshot file — avoids depending on a real screenshot asset (which goes
 * stale the moment the dashboard UI changes) and keeps this fully on-brand.
 */
export function AppPreview() {
  return (
    <section className="w-6xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      {/* Laptop mockup frame */}
      <div className="[perspective:1800px] -my-4">
        <div className="mx-auto max-w-3xl [transform-style:preserve-3d] [transform:rotateX(5deg)_rotateY(-5deg)] lg:[transform:rotateX(2deg)_rotateY(-2deg)] transition-transform duration-500">
          {/* Screen bezel */}
          <div className="rounded-t-2xl rounded-b-sm border-[10px] border-b-[3px] border-[#2b2f36] bg-[#101116] shadow-2xl">
            {/* Camera notch */}
            <div className="flex justify-center py-1" aria-hidden="true">
              <span className="h-1 w-1 rounded-full bg-[#3a3d44]" />
            </div>

            {/* Screen content — existing browser-chrome + dashboard mock */}
            <div className="overflow-hidden rounded-sm bg-surface">
              <Image className="w-full h-full" src="/dashboard-preview.png" alt="Dashboard preview" width={1200} height={700} loading="eager" />
            </div>
          </div>

          {/* Hinge */}
          <div className="h-2.5 bg-gradient-to-b from-[#3a3d44] to-[#1c1e22]" aria-hidden="true" />

          {/* Base */}
          <div className="relative">
            <div className="h-4 rounded-b-2xl bg-gradient-to-b from-[#4a4e57] to-[#25272c] shadow-xl" aria-hidden="true">
              <div className="absolute left-1/2 top-0 h-1.5 w-20 -translate-x-1/2 rounded-b-md bg-[#101116]" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>


      <div className="text-center max-w-2xl mx-auto my-12">
        <h4 className="font-display text-lg sm:text-xl font-bold text-ink">
          An interface that feels like yours
        </h4>
        <p className="mt-4 text-ink-secondary">
          Track streaks, see your progress, and pick up right where you left
          off — no clutter, no distractions.
        </p>
      </div>
    </section>
  );
}
