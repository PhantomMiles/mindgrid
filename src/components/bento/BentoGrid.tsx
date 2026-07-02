import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function BentoGrid({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(120px,auto)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
