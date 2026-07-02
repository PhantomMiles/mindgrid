import { NeuCard } from "@/components/ui/NeuCard";
import { ProgressDial } from "@/components/ui/ProgressDial";
import { Learner } from "@/types";
import { formatDuration } from "@/lib/utils";

interface WeeklyGoalCardProps {
  learner: Learner;
}

export function WeeklyGoalCard({ learner }: WeeklyGoalCardProps) {
  const percent = Math.min(
    100,
    Math.round((learner.weeklyMinutesCompleted / learner.weeklyGoalMinutes) * 100)
  );

  return (
    <NeuCard className="flex h-full flex-col items-center justify-center gap-3 text-center">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
        Weekly goal
      </p>
      <ProgressDial
        percent={percent}
        label="Weekly goal progress"
        sublabel={`${formatDuration(learner.weeklyMinutesCompleted)} / ${formatDuration(
          learner.weeklyGoalMinutes
        )}`}
      />
    </NeuCard>
  );
}
