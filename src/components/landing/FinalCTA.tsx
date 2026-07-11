import Link from "next/link";
import { ArrowRight, Sparkles, HeartHandshake } from "lucide-react";
import { NeuButton } from "@/components/ui/NeuButton";

export function FinalCTA() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
      <div className="skeu-metal-gold rounded-neu p-10 sm:p-14 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#3a2a0f]">
          Your next skill is one sign-up away.
        </h2>
        <p className="mt-4 text-[#3a2a0f]/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Join learners building real-world skills with real industry mentors — funded entirely by a community that believes education shouldn&apos;t have a price tag.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/sign-up">
            <NeuButton
              variant="secondary"
              className="bg-[#1c1f26] text-white flex items-center gap-2 text-base px-8 hover:text-white"
            >
              Start learning free
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </NeuButton>
          </Link>
          <Link href="/instructors#become">
            <NeuButton
              variant="secondary"
              className="bg-transparent border border-[#3a2a0f]/30 text-[#3a2a0f] hover:bg-[#3a2a0f]/10 flex items-center gap-2 text-base px-8"
            >
              <HeartHandshake className="w-4.5 h-4.5" />
              Become a mentor
            </NeuButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
