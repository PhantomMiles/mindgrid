import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NeuButton } from "@/components/ui/NeuButton";

export function FinalCTA() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="skeu-metal-gold rounded-neu p-10 sm:p-14 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#3a2a0f]">
          Your next skill is one sign-up away.
        </h2>
        <p className="mt-4 text-[#3a2a0f]/80 max-w-xl mx-auto">
          Join learners building real skills with real mentors — funded by a
          community that believes education shouldn&apos;t have a price tag.
        </p>
        <Link href="/sign-up" className="inline-block mt-8">
          <NeuButton
            variant="secondary"
            className="bg-[#1c1f26] text-white flex items-center gap-2 text-base px-8 hover:text-white"
          >
            Start learning free
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </NeuButton>
        </Link>
      </div>
    </section>
  );
}
