import { Flame, ArrowRight } from "lucide-react";
import { NeuCard } from "@/components/ui/NeuCard";
import { NeuButton } from "@/components/ui/NeuButton";
import { Learner } from "@/types";

interface WelcomeCardProps {
  learner: Learner;
}

export function WelcomeCard({ learner }: WelcomeCardProps) {
  const percentToGoal = Math.min(
    100,
    Math.round((learner.weeklyMinutesCompleted / learner.weeklyGoalMinutes) * 100)
  );

  return (
    <NeuCard className="flex h-full flex-col justify-between">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Welcome back, {learner.name}
          </h1>
          <p className="mt-1.5 text-sm text-ink-secondary">
            You&apos;re {percentToGoal}% toward your weekly learning goal.
          </p>
        </div>
        <div className="neu-raised-sm flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-warning">
          <Flame className="h-3.5 w-3.5" aria-hidden="true" />
          {learner.streakDays}-day streak
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <NeuButton variant="primary">
          Continue learning
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </NeuButton>
        <NeuButton variant="secondary">Browse courses</NeuButton>
      </div>
    </NeuCard>
  );
}
