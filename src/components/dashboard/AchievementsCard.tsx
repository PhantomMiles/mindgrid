import { NeuCard } from "@/components/ui/NeuCard";
import { Medal } from "@/components/ui/Medal";
import { Achievement } from "@/types";

interface AchievementsCardProps {
  achievements: Achievement[];
}

export function AchievementsCard({ achievements }: AchievementsCardProps) {
  return (
    <NeuCard className="h-full">
      <h2 className="font-display text-lg font-semibold text-ink">
        Achievements
      </h2>
      <div className="mt-5 grid grid-cols-4 gap-3">
        {achievements.map((a) => (
          <Medal key={a.id} tier={a.tier} title={a.title} earnedOn={a.earnedOn} />
        ))}
      </div>
    </NeuCard>
  );
}
