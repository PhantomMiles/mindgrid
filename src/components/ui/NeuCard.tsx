import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface NeuCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "raised" | "raised-sm" | "pressed" | "inset";
  as?: "div" | "section" | "article";
}

const variantClass: Record<NonNullable<NeuCardProps["variant"]>, string> = {
  raised: "neu-raised",
  "raised-sm": "neu-raised-sm",
  pressed: "neu-pressed",
  inset: "neu-inset",
};

export function NeuCard({
  variant = "raised",
  as = "div",
  className,
  children,
  ...props
}: NeuCardProps) {
  const Comp = as as "div";
  return (
    <Comp
      className={cn(variantClass[variant], "p-5 md:p-6", className)}
      {...props}
    >
      {children}
    </Comp>
  );
}
