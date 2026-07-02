import { BentoGrid } from "@/components/bento/BentoGrid";
import { BentoItem } from "@/components/bento/BentoItem";
import { ImpactCard } from "@/components/dashboard/ImpactCard";
import { impactStats, currentLearner } from "@/lib/mock-data";
import { NeuCard } from "@/components/ui/NeuCard";

export default function ImpactPage() {
  return (
    <div className="py-6">
      <div className="mb-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-display font-semibold text-ink">Your Impact</h1>
        <p className="mt-2 text-ink-secondary">
          Track your learning milestones and how your progress contributes to your community goals.
        </p>
      </div>

      <BentoGrid>
        <BentoItem colSpan={2}>
          <ImpactCard stats={impactStats} />
        </BentoItem>

        <BentoItem colSpan={1}>
          <NeuCard className="flex h-full flex-col p-6">
            <h2 className="font-display text-lg font-semibold text-ink">Personal Impact</h2>
            <p className="mt-1 text-xs text-ink-muted">Your journey matters</p>
            
            <div className="mt-6 flex flex-col gap-6 flex-1 justify-center">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft/20 text-accent-strong">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-ink">{currentLearner.streakDays}</div>
                  <div className="text-sm text-ink-secondary">Day Streak</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-light/20 text-gold-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-ink">{Math.floor(currentLearner.weeklyMinutesCompleted / 60)}h {currentLearner.weeklyMinutesCompleted % 60}m</div>
                  <div className="text-sm text-ink-secondary">Learned this week</div>
                </div>
              </div>
            </div>
          </NeuCard>
        </BentoItem>
      </BentoGrid>
    </div>
  );
}
