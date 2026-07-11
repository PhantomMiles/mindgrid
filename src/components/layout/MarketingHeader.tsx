"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Grid3x3, 
  ChevronDown, 
  Menu, 
  X, 
  Code, 
  LineChart, 
  Palette, 
  Briefcase, 
  MessageSquare, 
  Sparkles,
  Users,
  HeartHandshake,
  BookOpen,
  Compass,
  Award
} from "lucide-react";
import { NeuButton } from "@/components/ui/NeuButton";

const COURSE_CATEGORIES = [
  { href: "/courses?category=Software", label: "Software Engineering", desc: "React, APIs, web fundamentals, Git", icon: Code, color: "text-gold" },
  { href: "/courses?category=Data%20%26%20Analytics", label: "Data & Analytics", desc: "Data literacy, SQL, Python, Excel", icon: LineChart, color: "text-accent-strong" },
  { href: "/courses?category=Design", label: "Product Design", desc: "UI design principles, Figma, typography", icon: Palette, color: "text-rose" },
  { href: "/courses?category=Business", label: "Business & Strategy", desc: "Marketing, freelancing, small business", icon: Briefcase, color: "text-success" },
  { href: "/courses?category=Communication", label: "Communication", desc: "Public speaking, business writing", icon: MessageSquare, color: "text-teal" },
  { href: "/courses?category=Life%20Skills", label: "Life Skills & Habits", desc: "Finance, time management, budgeting", icon: Sparkles, color: "text-warning" },
];

const COMMUNITY_LINKS = [
  { href: "/instructors", label: "Volunteer Mentors", desc: "Meet the experts teaching courses", icon: Users },
  { href: "/impact", label: "Community Impact", desc: "Real-time stats and metrics", icon: Compass },
  { href: "/about#sponsor", label: "Sponsor a Scholar", desc: "Fund the next scholarship hour", icon: HeartHandshake },
];

const ABOUT_LINKS = [
  { href: "/about#story", label: "Our Story", desc: "How we started and why", icon: BookOpen },
  { href: "/about#values", label: "Mission & Values", desc: "Why we are free, permanently", icon: Award },
  { href: "/instructors#become", label: "Become a Mentor", desc: "Share your professional expertise", icon: Users },
];

export function MarketingHeader() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdowns on route changes
  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header 
      ref={headerRef}
      className="w-full px-4 sm:px-6 lg:px-8 py-5 flex sticky top-0 bg-surface/95 backdrop-blur-md border-b border-border z-50 items-center justify-between mx-auto transition-all"
    >
      {/* Brand logo (no text Home link, but logo points to /) */}
      <Link href="/" className="flex items-center gap-2.5 shrink-0 focus-ring rounded-neu-sm p-1">
        <div className="skeu-metal-gold flex h-10 w-10 items-center justify-center rounded-neu-sm">
          <Grid3x3 className="h-5 w-5 text-[#3a2a0f]" />
        </div>
        <span className="font-display text-xl font-bold text-ink">
          MindGrid
        </span>
      </Link>

      {/* Desktop Navigation Links */}
      <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
        {/* Courses Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("courses")}
            className={`focus-ring flex items-center gap-1 text-sm font-medium transition-colors py-2 px-3 rounded-neu-sm hover:bg-surface-raised ${
              openDropdown === "courses" ? "text-accent-strong" : "text-ink-secondary hover:text-ink"
            }`}
          >
            Courses
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openDropdown === "courses" ? "rotate-180" : ""}`} />
          </button>

          {openDropdown === "courses" && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-surface-raised rounded-neu p-4 border border-border shadow-neu-raised z-50 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
              {COURSE_CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className="flex gap-3 p-2.5 rounded-neu-sm hover:bg-surface transition-colors text-left focus-ring"
                  >
                    <div className={`w-8 h-8 rounded-neu-sm flex items-center justify-center neu-inset bg-surface shrink-0 ${cat.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-ink">{cat.label}</h4>
                      <p className="text-[10px] text-ink-muted leading-snug mt-0.5">{cat.desc}</p>
                    </div>
                  </Link>
                );
              })}
              <div className="col-span-2 border-t border-border mt-2 pt-2 text-center">
                <Link href="/courses" className="text-xs font-semibold text-accent-strong hover:text-accent flex items-center justify-center gap-1 py-1 focus-ring">
                  Browse All Courses
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Mentors & Community Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("community")}
            className={`focus-ring flex items-center gap-1 text-sm font-medium transition-colors py-2 px-3 rounded-neu-sm hover:bg-surface-raised ${
              openDropdown === "community" ? "text-accent-strong" : "text-ink-secondary hover:text-ink"
            }`}
          >
            Mentors & Community
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openDropdown === "community" ? "rotate-180" : ""}`} />
          </button>

          {openDropdown === "community" && (
            <div className="absolute left-0 mt-2 w-72 bg-surface-raised rounded-neu p-3 border border-border shadow-neu-raised z-50 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
              {COMMUNITY_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex gap-3 p-2.5 rounded-neu-sm hover:bg-surface transition-colors text-left focus-ring"
                  >
                    <div className="w-8 h-8 rounded-neu-sm flex items-center justify-center neu-inset bg-surface shrink-0 text-accent-strong">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-ink">{link.label}</h4>
                      <p className="text-[10px] text-ink-muted mt-0.5">{link.desc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* About Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("about")}
            className={`focus-ring flex items-center gap-1 text-sm font-medium transition-colors py-2 px-3 rounded-neu-sm hover:bg-surface-raised ${
              openDropdown === "about" ? "text-accent-strong" : "text-ink-secondary hover:text-ink"
            }`}
          >
            About
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openDropdown === "about" ? "rotate-180" : ""}`} />
          </button>

          {openDropdown === "about" && (
            <div className="absolute left-0 mt-2 w-72 bg-surface-raised rounded-neu p-3 border border-border shadow-neu-raised z-50 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
              {ABOUT_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex gap-3 p-2.5 rounded-neu-sm hover:bg-surface transition-colors text-left focus-ring"
                  >
                    <div className="w-8 h-8 rounded-neu-sm flex items-center justify-center neu-inset bg-surface shrink-0 text-gold">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-ink">{link.label}</h4>
                      <p className="text-[10px] text-ink-muted mt-0.5">{link.desc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* CTA Buttons & Hamburger */}
      <div className="flex items-center gap-3 sm:gap-4 shrink-0">
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

        {/* Mobile menu hamburger toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="focus-ring flex md:hidden items-center justify-center h-10 w-10 rounded-neu-sm neu-raised-sm hover:bg-surface-raised text-ink-secondary hover:text-ink"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer (Accordion Style) */}
      {mobileOpen && (
        <div className="absolute top-[81px] left-0 right-0 bg-surface border-b border-border shadow-lg p-5 z-40 md:hidden max-h-[80vh] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-5">
            {/* Courses Mobile Accordion */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-ink-muted mb-2.5 px-2">Courses</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 px-1">
                {COURSE_CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className="flex items-center gap-3 p-2 rounded-neu-sm hover:bg-surface-raised transition-colors focus-ring"
                    >
                      <div className={`w-8 h-8 rounded-neu-sm flex items-center justify-center neu-inset bg-surface shrink-0 ${cat.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-ink">{cat.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Community Mobile Links */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-ink-muted mb-2.5 px-2">Community</p>
              <div className="flex flex-col gap-1 px-1">
                {COMMUNITY_LINKS.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-3 p-2 rounded-neu-sm hover:bg-surface-raised transition-colors focus-ring"
                    >
                      <div className="w-8 h-8 rounded-neu-sm flex items-center justify-center neu-inset bg-surface shrink-0 text-accent-strong">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-ink">{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* About Mobile Links */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-ink-muted mb-2.5 px-2">About</p>
              <div className="flex flex-col gap-1 px-1">
                {ABOUT_LINKS.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-3 p-2 rounded-neu-sm hover:bg-surface-raised transition-colors focus-ring"
                    >
                      <div className="w-8 h-8 rounded-neu-sm flex items-center justify-center neu-inset bg-surface shrink-0 text-gold">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-ink">{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Sign in button for mobile */}
            <div className="border-t border-border pt-4 flex flex-col gap-3">
              <Link
                href="/sign-in"
                className="focus-ring flex items-center justify-center py-2 text-center text-sm font-medium text-ink-secondary hover:text-ink"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
