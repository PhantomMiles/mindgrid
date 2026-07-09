import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { AboutHero } from "@/components/about/AboutHero";
import { MissionValues } from "@/components/about/MissionValues";
import { OurStory } from "@/components/about/OurStory";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata = {
  title: "About — MindGrid",
  description:
    "Learn about MindGrid's mission to make education free, mentor-led, and community-funded for every learner.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center overflow-x-clip">
      <MarketingHeader />

      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AboutHero />
        <MissionValues />
        <OurStory />
        <AboutCTA />
      </main>

      <MarketingFooter />
    </div>
  );
}
