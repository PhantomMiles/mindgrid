import Link from "next/link";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { NeuButton } from "@/components/ui/NeuButton";

export function AboutCTA() {
  return (
    <section className="neu-raised p-8 sm:p-12 text-center">
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
