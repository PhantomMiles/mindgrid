import { Landmark, GraduationCap, Building2, Users2, HeartHandshake, Library } from "lucide-react";

/**
 * partner *categories*, not named organizations —
 * MindGrid doesn't have confirmed named partners yet. Swap these for
 * real logos/names once partnerships are signed.
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
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Column: Trust Statement */}
        <div className="max-w-md text-center lg:text-left shrink-0">
          <p className="text-xs font-bold uppercase tracking-wider text-accent-strong mb-2.5">
            SUPPORT & CREDIBILITY
          </p>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink leading-tight">
            Building open learning pathways together.
          </h3>
          <p className="mt-3 text-sm text-ink-secondary leading-relaxed">
            MindGrid coordinates with academic institutions, employers, and foundations to ensure our free curriculum remains high-quality and directly relevant to workplace needs.
          </p>
        </div>

        {/* Right Column: Partner Types Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
          {PARTNER_TYPES.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.label}
                className="neu-raised-sm p-4 flex items-center gap-3 hover:bg-surface-raised transition-colors group cursor-default"
              >
                <div className="w-10 h-10 rounded-neu-sm flex items-center justify-center neu-inset bg-surface shrink-0 text-ink-muted group-hover:text-gold transition-colors">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="text-[13px] font-semibold text-ink-secondary group-hover:text-ink transition-colors leading-tight">
                  {p.label}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
