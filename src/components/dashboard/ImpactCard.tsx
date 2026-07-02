import { NeuCard } from "@/components/ui/NeuCard";
import { ImpactMeter } from "@/components/ui/ImpactMeter";
import { ImpactStat } from "@/types";

interface ImpactCardProps {
  stats: ImpactStat[];
}

export function ImpactCard({ stats }: ImpactCardProps) {
  return (
    <NeuCard className="h-full">
      <h2 className="font-display text-lg font-semibold text-ink">
        Community impact
      </h2>
      <p className="mt-1 text-xs text-ink-muted">
        Funded by donors — this month
      </p>
      <div className="mt-5 flex flex-col gap-5">
        {stats.map((stat) => (
          <ImpactMeter
            key={stat.id}
            label={stat.label}
            value={stat.value}
            goal={stat.goal}
            unit={stat.unit}
          />
        ))}
      </div>
    </NeuCard>
  );
}
