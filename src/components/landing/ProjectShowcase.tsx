import { Bot, Landmark, MapPin, ExternalLink, Users } from "lucide-react";
import { NeuButton } from "@/components/ui/NeuButton";
import Link from "next/link";

const PROJECTS = [
  {
    icon: Bot,
    category: "AI & Software Engineering",
    title: "AI Study Companion",
    description: "An automated study planner, note synthesizer, and AI-guided tutor designed to help learners structure self-paced paths and test their knowledge with flashcards.",
    stats: "1.2k+ active student testing accounts",
    collaborators: "12 Students • 2 Mentors",
    stack: ["React", "FastAPI", "VectorDB", "Next.js"],
    tone: "border-l-4 border-l-gold",
    iconColor: "text-gold",
  },
  {
    icon: Landmark,
    category: "Business & Web Development",
    title: "Community Micro-Finance Portal",
    description: "A secure financial ledger, ledger auditor, and micro-loan management system deployed to support local cooperative savings organizations in community funding.",
    stats: "$24k+ in cooperative transactions audited",
    collaborators: "8 Students • 1 Mentor",
    stack: ["PostgreSQL", "Node.js", "TailwindCSS", "TypeScript"],
    tone: "border-l-4 border-l-accent-strong",
    iconColor: "text-accent-strong",
  },
  {
    icon: MapPin,
    category: "Data Science & UI/UX Design",
    title: "Logistics Route Optimizer",
    description: "An interactive mapping dashboard and route analytics tool built to calculate fuel efficiency and load schedules for municipal supply lines.",
    stats: "15% reduction in rural delivery overhead",
    collaborators: "6 Students • 2 Mentors",
    stack: ["Mapbox API", "Python Pandas", "React", "TailwindCSS"],
    tone: "border-l-4 border-l-rose",
    iconColor: "text-rose",
  },
];

export function ProjectShowcase() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-accent-strong mb-2.5">
            LEARNER CASE STUDIES & IMPACT
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
            Building functional software, not just completing quizzes.
          </h2>
          <p className="mt-4 text-ink-secondary leading-relaxed">
            Every MindGrid track ends with a collaborative capstone project. Under mentor guidance, students build and deploy open-source solutions to address real-world business and social challenges.
          </p>
        </div>
        <Link href="/impact" className="shrink-0 focus-ring">
          <NeuButton variant="secondary" className="flex items-center gap-2 text-sm px-6">
            View All Success Stories
            <ExternalLink className="w-4 h-4" />
          </NeuButton>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {PROJECTS.map((proj) => {
          const Icon = proj.icon;
          return (
            <div
              key={proj.title}
              className={`neu-raised-sm p-6 flex flex-col justify-between hover:bg-surface-raised transition-colors group cursor-default ${proj.tone}`}
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ink-muted group-hover:text-accent transition-colors">
                    {proj.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-ink-secondary">
                    <Users className="w-3.5 h-3.5 text-accent-strong" />
                    <span>{proj.collaborators}</span>
                  </div>
                </div>

                {/* Title & Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-neu-sm flex items-center justify-center neu-inset bg-surface shrink-0 ${proj.iconColor}`}>
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-ink group-hover:text-accent transition-colors leading-tight">
                    {proj.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-ink-secondary leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              <div>
                {/* Impact Stat Badge */}
                <div className="neu-inset p-3 rounded-neu-sm mb-4 text-center">
                  <span className="text-xs font-bold text-ink tabular-nums block">
                    {proj.stats}
                  </span>
                </div>

                {/* Technology Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
                  {proj.stack.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface/50 border border-border rounded-full px-2.5 py-0.5 text-[10px] font-medium text-ink-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
