import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { InstructorsHero } from "@/components/instructors/InstructorsHero";
import { InstructorCard } from "@/components/instructors/InstructorCard";
import { BecomeInstructor } from "@/components/instructors/BecomeInstructor";
import { instructors } from "@/lib/mock-data";

export const metadata = {
  title: "Instructors — MindGrid",
  description:
    "Meet the volunteer mentors behind MindGrid's free courses — working professionals sharing real expertise.",
};

export default function InstructorsPage() {
  return (
    <div className="flex flex-col items-center overflow-x-clip">
      <MarketingHeader />

      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <InstructorsHero />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>

        <BecomeInstructor />
      </main>

      <MarketingFooter />
    </div>
  );
}
