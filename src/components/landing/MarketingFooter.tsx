import Link from "next/link";
import { Grid3x3 } from "lucide-react";

const COLUMNS = [
  {
    title: "Learn",
    links: [
      { href: "/courses", label: "Browse courses" },
      { href: "/instructors", label: "Instructors" },
      { href: "/sign-up", label: "Get started" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "/about", label: "Our mission" },
      { href: "/impact", label: "Community impact" },
    ],
  },
  {
    title: "Account",
    links: [
      { href: "/sign-in", label: "Sign in" },
      { href: "/sign-up", label: "Create account" },
    ],
  },
];

export function MarketingFooter() {
  return (
    <footer className="w-full border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="skeu-metal-gold flex h-9 w-9 items-center justify-center rounded-neu-sm">
                <Grid3x3 className="h-4.5 w-4.5 text-[#3a2a0f]" />
              </div>
              <span className="font-display text-lg font-bold text-ink">
                MindGrid
              </span>
            </Link>
            <p className="mt-3 text-sm text-ink-muted max-w-xs">
              Free education, funded by community, delivered without
              compromise.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted mb-3">
                {col.title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="focus-ring text-sm text-ink-secondary hover:text-ink transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-xs text-ink-muted">
          © 2026 MindGrid. A nonprofit ed-tech platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
