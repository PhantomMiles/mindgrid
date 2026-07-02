import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NeuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "gold";
  size?: "sm" | "md";
  loading?: boolean;
}

export const NeuButton = forwardRef<HTMLButtonElement, NeuButtonProps>(
  (
    { variant = "secondary", size = "md", loading, className, children, disabled, ...props },
    ref
  ) => {
    const base =
      "focus-ring inline-flex items-center justify-center gap-2 rounded-neu-sm font-medium transition-all duration-150 ease-out active:translate-y-px disabled:opacity-45 disabled:cursor-not-allowed cursor-pointer select-none";

    const sizes = {
      sm: "min-h-[40px] px-4 text-sm",
      md: "min-h-[44px] px-5 text-sm",
    };

    const variants = {
      primary:
        "bg-accent text-white shadow-[0_4px_14px_rgba(108,125,255,0.35)] hover:bg-accent-strong active:shadow-none",
      secondary:
        "neu-raised-sm neu-interactive text-ink hover:text-accent",
      ghost:
        "text-ink-secondary hover:text-ink hover:bg-surface-raised",
      gold:
        "skeu-metal-gold text-[#3a2a0f] font-semibold active:shadow-neu-pressed-sm",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(base, sizes[size], variants[variant], className)}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading ? (
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
          />
        ) : null}
        {children}
      </button>
    );
  }
);

NeuButton.displayName = "NeuButton";
