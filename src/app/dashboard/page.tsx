import { BentoGrid } from "@/components/bento/BentoGrid";
import { BentoItem } from "@/components/bento/BentoItem";
import { WelcomeCard } from "@/components/dashboard/WelcomeCard";
import { WeeklyGoalCard } from "@/components/dashboard/WeeklyGoalCard";
import { ContinueLearningCard } from "@/components/dashboard/ContinueLearningCard";
import { ImpactCard } from "@/components/dashboard/ImpactCard";
import { AchievementsCard } from "@/components/dashboard/AchievementsCard";
import { LeaderboardCard } from "@/components/dashboard/LeaderboardCard";
import { UpcomingSessionCard } from "@/components/dashboard/UpcomingSessionCard";
import {
  achievements,
  courses,
  currentLearner,
  impactStats,
  leaderboard,
  upcomingSession,
} from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="py-6">
      <BentoGrid>
        <BentoItem colSpan={3}>
          <WelcomeCard learner={currentLearner} />
        </BentoItem>

        <BentoItem colSpan={1}>
          <WeeklyGoalCard learner={currentLearner} />
        </BentoItem>

        <BentoItem colSpan={2}>
          <ContinueLearningCard courses={courses} />
        </BentoItem>

        <BentoItem colSpan={2}>
          <ImpactCard stats={impactStats} />
        </BentoItem>

        <BentoItem colSpan={2}>
          <AchievementsCard achievements={achievements} />
        </BentoItem>

        <BentoItem colSpan={1}>
          <UpcomingSessionCard session={upcomingSession} />
        </BentoItem>

        <BentoItem colSpan={1}>
          <LeaderboardCard entries={leaderboard} />
        </BentoItem>
      </BentoGrid>
    </div>
  );
}
