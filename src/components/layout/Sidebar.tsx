"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  BookOpen,
  Users,
  HeartHandshake,
  Settings,
  Grid3x3,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutGrid },
  { href: "/dashboard/courses", label: "Courses", icon: BookOpen },
  { href: "/dashboard/community", label: "Community", icon: Users },
  { href: "/dashboard/impact", label: "Impact", icon: HeartHandshake },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-[240px] shrink-0 flex-col gap-6 border-r border-border bg-bg px-4 py-6 lg:flex sticky top-0 h-screen overflow-y-auto">
      <Link href="/" className="flex items-center gap-2.5 px-2">
        <div
          className="skeu-metal-gold flex h-9 w-9 items-center justify-center rounded-neu-sm"
          aria-hidden="true"
        >
          <Grid3x3 className="h-4.5 w-4.5 text-[#3a2a0f]" />
        </div>
        <span className="font-display text-lg font-semibold text-ink">
          MindGrid
        </span>
      </Link>

      <nav aria-label="Primary">
        <ul className="flex flex-col gap-1.5">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "focus-ring flex min-h-[44px] items-center gap-3 rounded-neu-sm px-3 text-sm font-medium transition-all",
                    active
                      ? "neu-pressed text-accent"
                      : "text-ink-secondary hover:text-ink"
                  )}
                >
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="neu-raised-sm p-4 text-center">
        <p className="text-xs leading-snug text-ink-secondary">
          Your learning is funded by donors like you.
        </p>
        <Link
          href="/dashboard/impact"
          className="focus-ring skeu-metal-gold mt-3 inline-flex min-h-[40px] w-full items-center justify-center rounded-neu-sm text-xs font-semibold text-[#3a2a0f]"
        >
          Support MindGrid
        </Link>
      </div>

      <div className="flex-1" />
    </aside>
  );
}
