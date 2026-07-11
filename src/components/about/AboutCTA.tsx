import Link from "next/link";
import { ArrowRight, HeartHandshake, GraduationCap, ShieldCheck } from "lucide-react";
import { NeuButton } from "@/components/ui/NeuButton";
import { impactStats } from "@/lib/mock-data";
import { formatNumber } from "@/lib/utils";

const PILL_TAGS = [
  { icon: GraduationCap, label: "Mentor-Led" },
  { icon: HeartHandshake, label: "Community Funded" },
  { icon: ShieldCheck, label: "Always Free" },
];

export function AboutCTA() {
  return (
    <section className="neu-raised p-8 sm:p-12 text-center">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 max-w-md mx-auto">
        {impactStats.map((stat) => (
          <div key={stat.id}>
            <p className="font-display text-4xl font-bold text-ink">
              {formatNumber(stat.value)}
              <span className="text-accent">+</span>
            </p>
            <p className="mt-1.5 text-xs text-ink-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="neu-inset mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full">
        <HeartHandshake className="h-6 w-6 text-accent-strong" aria-hidden="true" />
      </div>
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
        Ready to be part of it?
      </h2>
      <p className="mt-4 text-ink-secondary max-w-xl mx-auto">
        Whether you want to learn, teach, or donate — there's a place for you
        in MindGrid. Every role matters.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/sign-up">
          <NeuButton
            variant="primary"
            className="w-full sm:w-auto flex items-center gap-2 px-8"
          >
            Start learning free
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </NeuButton>
        </Link>
        <Link href="/dashboard/impact">
          <NeuButton variant="gold" className="w-full sm:w-auto px-8">
            Support the fund
          </NeuButton>
        </Link>
      </div>
    </section>
  );
}
