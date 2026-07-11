import { Code, LineChart, Palette, Briefcase } from "lucide-react";
import Link from "next/link";

const TRACKS = [
  {
    icon: Code,
    tone: "text-gold",
    title: "Software Engineering & AI",
    description:
      "Build real web products. Master React, modern APIs, version control with Git, and clean-code principles under the guidance of veteran developers.",
    href: "/courses?category=Software",
  },
  {
    icon: LineChart,
    tone: "text-accent-strong",
    title: "Data Analytics & Science",
    description:
      "Go from spreadsheet basics to advanced SQL queries, statistical modeling, and Python automation. Learn to translate raw datasets into business decisions.",
    href: "/courses?category=Data%20%26%20Analytics",
  },
  {
    icon: Palette,
    tone: "text-rose",
    title: "Product Design (UI/UX)",
    description:
      "Design interfaces that feel alive. Study user research methods, typography, design systems, and wireframing using Figma and other industry standards.",
    href: "/courses?category=Design",
  },
  {
    icon: Briefcase,
    tone: "text-success",
    title: "Business & Strategy",
    description:
      "Launch your ideas. Understand digital marketing, small business finance, sales strategy, and client acquisition methods to build sustainable systems.",
    href: "/courses?category=Business",
  },
];

export function FeatureGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-xs font-bold uppercase tracking-wider text-accent-strong mb-2.5">
          CURRICULUM DEPARTMENTS
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
          Structured tracks for practical skills
        </h2>
        <p className="mt-4 text-ink-secondary leading-relaxed">
          MindGrid features intensive, project-first courses designed to teach you the skills needed to build and scale your own solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TRACKS.map((t) => {
          const Icon = t.icon;
          return (
            <Link 
              key={t.title} 
              href={t.href}
              className="neu-raised-sm neu-interactive p-8 text-left hover:bg-surface-raised transition-colors group block focus-ring"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`neu-inset w-12 h-12 rounded-neu-sm flex items-center justify-center mb-6 bg-surface ${t.tone}`}
                >
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-ink-muted group-hover:text-accent-strong transition-colors">
                  Explore track &rarr;
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-ink mb-3 group-hover:text-accent-strong transition-colors">
                {t.title}
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {t.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
