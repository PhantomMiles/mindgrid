import Link from "next/link";
import { Grid3x3, ArrowRight, ShieldCheck, Sparkles, BookOpen } from "lucide-react";
import { NeuButton } from "@/components/ui/NeuButton";

export default function LandingPage() {
  return (
    <div className="min-h-dvh flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="skeu-metal-gold flex h-10 w-10 items-center justify-center rounded-neu-sm">
            <Grid3x3 className="h-5 w-5 text-[#3a2a0f]" />
          </div>
          <span className="font-display text-xl font-bold text-ink">
            MindGrid
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/sign-in" className="text-sm font-medium text-ink-secondary hover:text-ink transition-colors">
            Sign In
          </Link>
          <Link href="/sign-up">
            <NeuButton variant="primary">Get Started</NeuButton>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft/20 text-accent-strong text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Community-funded learning</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-display font-bold text-ink leading-tight">
            Unlock your potential with free, world-class education.
          </h1>
          <p className="text-xl text-ink-secondary max-w-2xl mx-auto">
            MindGrid connects learners with premium courses, dedicated mentors, and community-funded scholarships. Start your journey today, completely free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/sign-up" className="w-full sm:w-auto">
              <NeuButton variant="primary" className="w-full sm:w-auto flex items-center justify-center gap-2 text-lg px-8 py-4">
                Start Learning Now <ArrowRight className="w-5 h-5" />
              </NeuButton>
            </Link>
            <Link href="/courses" className="w-full sm:w-auto">
              <NeuButton className="w-full sm:w-auto text-lg px-8 py-4">
                Browse Courses
              </NeuButton>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="w-full max-w-5xl mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="neu-inset p-8 rounded-neu">
            <div className="w-12 h-12 bg-accent-soft/20 text-accent-strong rounded-xl flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-ink mb-3">Premium Courses</h3>
            <p className="text-ink-secondary">Access high-quality curricula across Data, Communication, Software, and Life Skills.</p>
          </div>
          <div className="neu-inset p-8 rounded-neu">
            <div className="w-12 h-12 bg-gold-light/20 text-gold-dark rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-ink mb-3">Community Funded</h3>
            <p className="text-ink-secondary">Every course is funded by generous donors, ensuring education remains accessible to all.</p>
          </div>
          <div className="neu-inset p-8 rounded-neu">
            <div className="w-12 h-12 bg-success/20 text-success rounded-xl flex items-center justify-center mb-6">
              <Grid3x3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-ink mb-3">Expert Mentors</h3>
            <p className="text-ink-secondary">Connect with industry professionals through live sessions and personalized guidance.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-8 text-ink-muted text-sm">
        <p>© 2026 MindGrid Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}
