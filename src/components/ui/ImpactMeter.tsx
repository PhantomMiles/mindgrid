import { formatNumber } from "@/lib/utils";

interface ImpactMeterProps {
  label: string;
  value: number;
  goal: number;
  unit: string;
}

/**
 * A skeuomorphic "liquid fill" meter styled like a glass donation tube —
 * used specifically for nonprofit impact/funding stats where a tactile,
 * almost physical metaphor (filling up) reinforces the "your action counts"
 * message better than a flat progress bar.
 */
export function ImpactMeter({ label, value, goal, unit }: ImpactMeterProps) {
  const percent = Math.min(100, Math.round((value / goal) * 100));

  return (
    <div className="flex items-center gap-4">
      <div
        className="skeu-glass-tube relative h-24 w-9 shrink-0 overflow-hidden rounded-full"
        role="img"
        aria-label={`${label}: ${formatNumber(value)} of ${formatNumber(goal)} ${unit} (${percent}%)`}
      >
        <div
          className="absolute bottom-0 left-0 right-0 rounded-full"
          style={
            {
              height: `${percent}%`,
              background:
                "linear-gradient(180deg, var(--accent-strong), var(--accent))",
              boxShadow: "inset 0 2px 4px rgba(255,255,255,0.25)",
              "--fill-to": `${percent}%`,
            } as React.CSSProperties
          }
        >
          <div
            className="absolute left-1.5 top-1 h-1/2 w-1 rounded-full bg-white/30"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="min-w-0">
        <p className="text-xs text-ink-muted">{label}</p>
        <p className="font-display text-xl font-semibold text-ink tabular-nums">
          {formatNumber(value)}
          <span className="ml-1 text-sm font-normal text-ink-muted">
            / {formatNumber(goal)} {unit}
          </span>
        </p>
        <p className="mt-0.5 text-[11px] font-medium text-accent">{percent}% of goal</p>
      </div>
    </div>
  );
}
