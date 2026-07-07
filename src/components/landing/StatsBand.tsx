import { courses, instructors, impactStats } from "@/lib/mock-data";
import { formatNumber } from "@/lib/utils";

export function StatsBand() {
  const totalLearnersReached = instructors.reduce(
    (sum, i) => sum + i.learnersReached,
    0
  );
  const fundedThisMonth = impactStats.find((s) => s.unit === "learners")?.value ?? 0;

  const stats = [
    { value: `${formatNumber(totalLearnersReached)}+`, label: "Learners reached" },
    { value: `${courses.length}+`, label: "Free courses" },
    { value: `${instructors.length}`, label: "Volunteer mentors" },
    { value: `${formatNumber(fundedThisMonth)}`, label: "Funded this month" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="neu-raised grid grid-cols-2 sm:grid-cols-4 gap-6 p-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl sm:text-4xl font-bold text-accent-strong tabular-nums">
              {stat.value}
            </p>
            <p className="mt-1.5 text-xs sm:text-sm text-ink-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
