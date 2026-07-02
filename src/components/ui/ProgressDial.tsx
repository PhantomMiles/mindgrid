"use client";

interface ProgressDialProps {
  percent: number; // 0-100
  size?: number;
  label: string;
  sublabel?: string;
}

/**
 * A skeuomorphic circular gauge — styled like a physical instrument dial
 * (metal bezel, inset glass face) rather than a flat progress ring.
 * Used sparingly as a signature element, not the default progress pattern.
 */
export function ProgressDial({
  percent,
  size = 148,
  label,
  sublabel,
}: ProgressDialProps) {
  const clamped = Math.min(100, Math.max(0, percent));
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (clamped / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${label}: ${clamped}% complete${sublabel ? `, ${sublabel}` : ""}`}
    >
      {/* Metal bezel */}
      <div
        className="skeu-metal-gold absolute inset-0 rounded-full"
        aria-hidden="true"
      />
      {/* Inset glass face */}
      <div
        className="absolute rounded-full bg-surface"
        style={{
          inset: 10,
          boxShadow:
            "inset 0 2px 8px rgba(0,0,0,0.5), inset 0 -1px 0 rgba(255,255,255,0.04)",
        }}
        aria-hidden="true"
      />
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        className="absolute inset-0 -rotate-90"
        aria-hidden="true"
      >
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="var(--surface-raised)"
          strokeWidth="8"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset 900ms cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      </svg>
      <div className="relative flex flex-col items-center">
        <span className="font-display text-2xl font-semibold text-ink tabular-nums">
          {clamped}%
        </span>
        {sublabel ? (
          <span className="text-[11px] text-ink-muted">{sublabel}</span>
        ) : null}
      </div>
    </div>
  );
}
