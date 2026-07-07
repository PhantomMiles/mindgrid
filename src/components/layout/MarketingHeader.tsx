import Link from "next/link";
import { Grid3x3 } from "lucide-react";
import { NeuButton } from "@/components/ui/NeuButton";

const NAV_LINKS = [
  { href: "/courses", label: "Courses" },
  { href: "/instructors", label: "Instructors" },
  { href: "/about", label: "About" },
];

export function MarketingHeader() {
  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 py-6 flex sticky top-0 bg-surface z-40 items-center justify-between mx-auto">
      <Link href="/" className="flex items-center gap-2.5">
        <div className="skeu-metal-gold flex h-10 w-10 items-center justify-center rounded-neu-sm">
          <Grid3x3 className="h-5 w-5 text-[#3a2a0f]" />
        </div>
        <span className="font-display text-xl font-bold text-ink">
          MindGrid
        </span>
      </Link>

      <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="focus-ring text-sm font-medium text-ink-secondary hover:text-ink transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Link
          href="/sign-in"
          className="focus-ring hidden sm:inline text-sm font-medium text-ink-secondary hover:text-ink transition-colors"
        >
          Sign In
        </Link>
        <Link href="/sign-up">
          <NeuButton variant="primary" size="sm">
            Get Started
          </NeuButton>
        </Link>
      </div>
    </header>
  );
}
