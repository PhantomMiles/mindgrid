import { cn } from "@/lib/utils";

interface AvatarProps {
  initials: string;
  size?: "sm" | "md" | "lg";
  highlight?: boolean;
}

const sizes = {
  sm: "h-8 w-8 text-[11px]",
  md: "h-10 w-10 text-xs",
  lg: "h-14 w-14 text-sm",
};

export function Avatar({ initials, size = "md", highlight }: AvatarProps) {
  return (
    <div
      className={cn(
        "neu-raised-sm flex shrink-0 items-center justify-center rounded-full font-semibold",
        highlight ? "text-accent" : "text-ink-secondary",
        sizes[size]
      )}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
