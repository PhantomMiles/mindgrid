import { ArrowRight, Lightbulb } from "lucide-react";
import Link from "next/link";
import { NeuButton } from "@/components/ui/NeuButton";

export function BecomeInstructor() {
  return (
    <section className="neu-raised mt-16 p-8 sm:p-12 text-center">
      <div className="neu-inset mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full">
        <Lightbulb className="h-6 w-6 text-gold-dark" aria-hidden="true" />
      </div>
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
        Want to teach on MindGrid?
      </h2>
      <p className="mt-4 text-ink-secondary max-w-xl mx-auto">
        If you have expertise in any field and a genuine desire to make
        education more accessible, we'd love to hear from you. Our instructors
        set their own schedules and we handle all course infrastructure.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/sign-up">
          <NeuButton
            variant="primary"
            className="w-full sm:w-auto flex items-center gap-2 px-8"
          >
            Apply to teach
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </NeuButton>
        </Link>
        <Link href="/about">
          <NeuButton variant="secondary" className="w-full sm:w-auto px-8">
            Learn about our mission
          </NeuButton>
        </Link>
      </div>
    </section>
  );
}
