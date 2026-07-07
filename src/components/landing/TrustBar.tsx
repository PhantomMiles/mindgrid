import { Landmark, GraduationCap, Building2, Users2, HeartHandshake, Library } from "lucide-react";

/**
 * NOTE: these are partner *categories*, not named organizations —
 * MindGrid doesn't have confirmed named partners yet. Swap these for
 * real logos/names once partnerships are signed; don't rename these to
 * specific institutions without confirming the relationship first.
 */
const PARTNER_TYPES = [
  { label: "Ministries of Education", icon: Landmark },
  { label: "Universities", icon: GraduationCap },
  { label: "Employer Partners", icon: Building2 },
  { label: "Community Libraries", icon: Library },
  { label: "NGO Networks", icon: Users2 },
  { label: "Donor Foundations", icon: HeartHandshake },
];

export function TrustBar() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-center text-xs font-semibold uppercase tracking-wide text-ink-muted mb-8">
        Built to work alongside
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {PARTNER_TYPES.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.label}
              className="flex flex-col items-center gap-2 text-center opacity-70 hover:opacity-100 transition-opacity"
            >
              <Icon className="h-10 w-10 text-ink-muted" aria-hidden="true" />
              <span className="text-[13px] font-medium text-ink-muted">
                {p.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
