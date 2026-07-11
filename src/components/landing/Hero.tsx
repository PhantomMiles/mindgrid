import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { NeuButton } from "@/components/ui/NeuButton";

export function Hero() {
  return (
    <section className="relative w-full">
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-86 pt-16 pb-8 flex flex-col items-center text-center md:text-left">
        {/* Trust rating badge & status badge side-by-side */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8">
          <div className="neu-raised-sm inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-gold">
            <Star className="w-3.5 h-3.5 fill-gold text-gold" aria-hidden="true" />
            <span>4.9/5 Rating</span>
            <span className="text-ink-muted">| 1,200+ Learners</span>
          </div>
          <div className="neu-raised-sm inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-accent-strong">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>2026 Scholarship Fund Open</span>
          </div>
        </div>

        {/* Decorative floating cards flank the headline on larger screens */}
        <div className="relative w-full">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-ink leading-[1.05] tracking-tight">
            Free education,
            <br />
            <span className="text-accent">funded by community.</span>
          </h1>
        </div>

        <p className="mt-7 text-lg sm:text-xl text-ink-secondary max-w-2xl leading-relaxed">
          MindGrid connects ambitious learners with real mentors, structured courses,
          and community-funded scholarships — every course free, forever, for
          every learner.
        </p>

        <div className="flex flex-col sm:flex-row justify-start gap-4 pt-8 w-full sm:w-auto">
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
              className="w-full sm:w-auto text-base px-8 justify-center"
            >
              Browse courses
            </NeuButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
