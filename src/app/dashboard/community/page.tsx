import { BentoGrid } from "@/components/bento/BentoGrid";
import { BentoItem } from "@/components/bento/BentoItem";
import { LeaderboardCard } from "@/components/dashboard/LeaderboardCard";
import { UpcomingSessionCard } from "@/components/dashboard/UpcomingSessionCard";
import { leaderboard, upcomingSession } from "@/lib/mock-data";
import { NeuCard } from "@/components/ui/NeuCard";

export default function CommunityPage() {
  return (
    <div className="py-6">
      <div className="mb-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-display font-semibold text-ink">Community</h1>
        <p className="mt-2 text-ink-secondary">
          Connect with other learners, mentors, and the broader community.
        </p>
      </div>

      <BentoGrid>
        <BentoItem colSpan={2}>
          <LeaderboardCard entries={leaderboard} />
        </BentoItem>

        <BentoItem colSpan={1}>
          <UpcomingSessionCard session={upcomingSession} />
        </BentoItem>

        <BentoItem colSpan={3}>
          <NeuCard className="flex h-full flex-col justify-center items-center p-8 text-center min-h-[300px]">
            <div className="rounded-full bg-surface-raised p-4 mb-4 neu-pressed">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink-muted">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h2 className="text-xl font-display font-semibold text-ink mb-2">Community Feed</h2>
            <p className="text-ink-secondary max-w-md">
              A dynamic feed of learner achievements, mentor announcements, and community discussions is coming soon!
            </p>
          </NeuCard>
        </BentoItem>
      </BentoGrid>
    </div>
  );
}
