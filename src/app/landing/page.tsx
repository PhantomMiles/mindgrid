import Link from "next/link";
import { Hero } from "@/components/landing/Hero";
import { StatsBand } from "@/components/landing/StatsBand";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { Grid3x3 } from "lucide-react";
import { NeuButton } from "@/components/ui/NeuButton";
import { Testimonials } from "@/components/landing/Testimonials";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { TrustBar } from "@/components/landing/TrustBar";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FAQ } from "@/components/landing/FAQ";
import { AppPreview } from "@/components/landing/AppPreview";
import { AboutTeaser } from "@/components/landing/AboutTeaser";
import { FeaturedCourses } from "@/components/landing/FeaturedCourses";
import { InstructorSpotlight } from "@/components/landing/InstructorSpotlight";
import { ProjectShowcase } from "@/components/landing/ProjectShowcase";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center overflow-x-clip">
      
      <MarketingHeader />

      {/* Hero Section Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 relative w-full max-w-7xl mx-auto">
        {/* Radial glow backdrop */}
        <div
          className="pointer-events-none absolute inset-x-0 -top-40 h-[560px]"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 30%, var(--accent-soft) 0%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute left-1/2 top-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(closest-side, var(--gold) 0%, transparent 75%)",
          }}
        />
        <Hero />
        <AppPreview />
      </div>

      <TrustBar />

      <FeatureGrid />

      <ProjectShowcase />

      <HowItWorks />

      <AboutTeaser />

      <FeaturedCourses />

      <InstructorSpotlight />

      <Testimonials />

      <StatsBand />

      <FAQ />

      <FinalCTA />

      <MarketingFooter />
    </div>
  );
}