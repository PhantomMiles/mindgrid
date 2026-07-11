import Link from "next/link";
import { ArrowRight, HeartHandshake, Users, GraduationCap, ShieldCheck } from "lucide-react";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { NeuButton } from "@/components/ui/NeuButton";
import { ImpactMeter } from "@/components/ui/ImpactMeter";
import { courses, instructors, impactStats } from "@/lib/mock-data";
import { formatNumber } from "@/lib/utils";

const PILL_TAGS = [
  { icon: GraduationCap, label: "Mentor-Led" },
  { icon: HeartHandshake, label: "Community Funded" },
  { icon: ShieldCheck, label: "Always Free" },
];

export const metadata = {
  title: "Community Impact — MindGrid",
  description:
    "See MindGrid's real-time community impact — learners funded, scholarship hours unlocked, and how donor support translates into free education.",
};

export default function PublicImpactPage() {
  const totalLearnersReached = instructors.reduce((sum, i) => sum + i.learnersReached, 0);

  return (
    <div className="flex flex-col items-center overflow-x-clip">
      <MarketingHeader />

      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-strong mb-3">
            Community Impact
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink leading-tight">
            Every number here is a learner,
            <br />
            <span className="text-accent">not a statistic.</span>
          </h1>
          <p className="mt-6 text-lg text-ink-secondary">
            MindGrid is funded entirely by donors. Here&apos;s what that funding
            actually unlocks — updated monthly, published openly.
          </p>
        </section>

        {/* Aggregate impact meters — community-wide, not personal */}
        <section className="neu-raised p-8 sm:p-10 mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {impactStats.map((stat) => (
              <ImpactMeter
                key={stat.id}
                label={stat.label}
                value={stat.value}
                goal={stat.goal}
                unit={stat.unit}
              />
            ))}
          </div>
        </section>

        {/* Platform-wide stats */}
        <section className="mb-16">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {PILL_TAGS.map((tag) => {
              const Icon = tag.icon;
              return (
                <span
                  key={tag.label}
                  className="neu-raised-sm inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-ink-secondary"
                >
                  <Icon className="h-3.5 w-3.5 text-accent-strong" aria-hidden="true" />
                  {tag.label}
                </span>
              );
            })}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold text-ink tabular-nums">
                {formatNumber(totalLearnersReached)}+
              </p>
              <p className="mt-1.5 text-xs text-ink-muted">Learners reached</p>
            </div>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold text-ink tabular-nums">
                {courses.length}+
              </p>
              <p className="mt-1.5 text-xs text-ink-muted">Free courses</p>
            </div>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold text-ink tabular-nums">
                {instructors.length}
              </p>
              <p className="mt-1.5 text-xs text-ink-muted">Volunteer mentors</p>
            </div>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold text-ink tabular-nums">
                100%
              </p>
              <p className="mt-1.5 text-xs text-ink-muted">Free, permanently</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="neu-raised p-8 sm:p-12 text-center">
          <div className="neu-inset mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full">
            <Users className="h-6 w-6 text-accent-strong" aria-hidden="true" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
            Help us fund the next scholarship hour.
          </h2>
          <p className="mt-4 text-ink-secondary max-w-xl mx-auto">
            Every donation goes directly toward free courses and mentor
            sessions — no overhead skimmed off the top.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up">
              <NeuButton variant="primary" className="w-full sm:w-auto flex items-center gap-2 px-8">
                Start learning free
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </NeuButton>
            </Link>
            <Link href="/about">
              <NeuButton variant="gold" className="w-full sm:w-auto px-8">
                Learn about our model
              </NeuButton>
            </Link>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
