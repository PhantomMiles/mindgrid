import { MedalTier } from "@/types";

interface MedalProps {
  tier: MedalTier;
  title: string;
  earnedOn: string;
}

const tierGradient: Record<MedalTier, string> = {
  gold: "linear-gradient(145deg, #f6d9a0, #b8873e)",
  silver: "linear-gradient(145deg, #e6e9ee, #9aa1ad)",
  bronze: "linear-gradient(145deg, #d9a878, #8a5a34)",
};

const tierRing: Record<MedalTier, string> = {
  gold: "#8a611c",
  silver: "#6b707a",
  bronze: "#5c3c1f",
};

/**
 * A skeuomorphic medal — metallic radial disc with a ribbon tail,
 * standing in for a flat achievement badge.
 */
export function Medal({ tier, title, earnedOn }: MedalProps) {
  return (
    <div className="flex flex-col items-center gap-2 text-center" title={`${title} — earned ${earnedOn}`}>
      <div className="relative">
        {/* Ribbon */}
        <div
          className="absolute left-1/2 top-8 -z-10 h-8 w-3 -translate-x-1/2"
          style={{
            background: tier === "gold" ? "#4a5bd6" : tier === "silver" ? "#6b6f7a" : "#8a5a34",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full"
          style={{
            background: tierGradient[tier],
            boxShadow: `inset 0 1px 1px rgba(255,255,255,0.7), inset 0 -2px 3px rgba(0,0,0,0.35), 0 3px 6px rgba(0,0,0,0.4), 0 0 0 2px ${tierRing[tier]}`,
          }}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 21 12 17.27 5.8 21 7 14.14l-5-4.87 7.1-1.01L12 2z"
              fill="rgba(0,0,0,0.28)"
            />
          </svg>
        </div>
      </div>
      <p className="max-w-[80px] text-[11px] font-medium leading-tight text-ink-secondary">
        {title}
      </p>
    </div>
  );
}
