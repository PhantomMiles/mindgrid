import Link from "next/link";
import { Sparkles } from "lucide-react";

export function AboutHero() {
  return (
    <section className="text-center max-w-3xl mx-auto mb-16">
      {/* Badge */}
      <div className="neu-raised-sm inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-accent-strong mb-8">
        <Sparkles className="w-4 h-4" aria-hidden="true" />
        <span>A nonprofit ed-tech platform</span>
      </div>

      <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink leading-tight">
        Education is a right,
        <br />
        <span className="text-accent">not a privilege.</span>
      </h1>
      <p className="mt-6 text-lg text-ink-secondary leading-relaxed">
        MindGrid was founded on a simple conviction: talent is distributed
        equally, but opportunity isn't. We're building the infrastructure to fix
        that — starting with free, mentor-led learning for every motivated
        learner, regardless of where they were born or how much money they have.
      </p>

      <p className="mt-6 text-xs text-ink-muted">
        <Link href="/" className="hover:text-ink transition-colors">
          Home
        </Link>{" "}
        / <span className="text-ink-secondary">About</span>
      </p>
    </section>
  );
}
