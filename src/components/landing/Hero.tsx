import Link from "next/link";
import { ArrowRight, Sparkles, Flame, CheckCircle2 } from "lucide-react";
import { NeuButton } from "@/components/ui/NeuButton";

export function Hero() {
  return (
    <section className="relative w-full">
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 flex flex-col items-center text-center md:text-left">
        <div className="neu-raised-sm inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-accent-strong mb-8">
          <Sparkles className="w-4 h-4" aria-hidden="true" />
          <span>2026 Scholarship Fund is now open</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </div>

        {/* Decorative floating cards flank the headline on larger screens */}
        <div className="relative w-full">

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-ink leading-[1.05] tracking-tight">
            Free education,
            <br />
            <span className="text-accent">funded by community.</span>
          </h1>
        </div>

        <p className="mt-7 text-lg sm:text-xl text-ink-secondary max-w-2xl">
          MindGrid connects learners with real mentors, structured courses,
          and community-funded scholarships — every course free, forever, for
          every learner.
        </p>

        <div className="flex flex-col sm:flex-row justify-start gap-4 pt-8">
          <Link href="/sign-up" className="w-full sm:w-auto">
            <NeuButton
              variant="primary"
              className="w-full sm:w-auto flex items-center justify-center gap-2 text-base px-8"
            >
              Start learning free
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </NeuButton>
          </Link>
          <Link href="/courses" className="w-full sm:w-auto">
            <NeuButton
              variant="secondary"
              className="w-full sm:w-auto text-base px-8"
            >
              Browse courses
            </NeuButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
