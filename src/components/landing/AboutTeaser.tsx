import Link from "next/link";
import { ArrowRight, Shield, Sparkles, HeartHandshake } from "lucide-react";

export function AboutTeaser() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs font-bold uppercase tracking-wider text-accent-strong mb-2.5">
          OUR MISSION & MODEL
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
          The principles behind MindGrid
        </h2>
        <p className="mt-4 text-ink-secondary leading-relaxed">
          We are a nonprofit organization built on the belief that high-quality, practical tech education should be a public good.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Pillar 1 */}
        <div className="neu-raised-sm p-6 text-left hover:bg-surface-raised transition-colors group cursor-default">
          <div className="w-10 h-10 rounded-neu-sm flex items-center justify-center neu-inset bg-surface shrink-0 text-accent-strong mb-5">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h3 className="text-base font-display font-semibold text-ink mb-2">
            100% Community-Funded
          </h3>
          <p className="text-sm text-ink-secondary leading-relaxed">
            Skip the high tuition and student debt. MindGrid is backed entirely by sponsor organizations and individual donors who fund every learning hour.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="neu-raised-sm p-6 text-left hover:bg-surface-raised transition-colors group cursor-default">
          <div className="w-10 h-10 rounded-neu-sm flex items-center justify-center neu-inset bg-surface shrink-0 text-gold mb-5">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-base font-display font-semibold text-ink mb-2">
            Industry Mentors
          </h3>
          <p className="text-sm text-ink-secondary leading-relaxed">
            Learn from working professionals who volunteer their time. Get practical feedback on your code, designs, and business pitches.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="neu-raised-sm p-6 text-left hover:bg-surface-raised transition-colors group cursor-default">
          <div className="w-10 h-10 rounded-neu-sm flex items-center justify-center neu-inset bg-surface shrink-0 text-rose mb-5">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="text-base font-display font-semibold text-ink mb-2">
            Verifiable Credentials
          </h3>
          <p className="text-sm text-ink-secondary leading-relaxed">
            Gain verified, cryptographic certificates and build a portfolio of collaborative open-source projects to showcase your competence to employers.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/about"
          className="focus-ring inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong hover:text-accent transition-colors"
        >
          Read our full story
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
