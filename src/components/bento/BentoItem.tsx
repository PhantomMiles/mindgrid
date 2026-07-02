import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BentoItemProps extends HTMLAttributes<HTMLDivElement> {
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2;
}

const colSpanClass: Record<number, string> = {
  1: "lg:col-span-1",
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
};

const rowSpanClass: Record<number, string> = {
  1: "lg:row-span-1",
  2: "lg:row-span-2",
};

export function BentoItem({
  colSpan = 1,
  rowSpan = 1,
  className,
  children,
  ...props
}: BentoItemProps) {
  return (
    <div
      className={cn(colSpanClass[colSpan], rowSpanClass[rowSpan], className)}
      {...props}
    >
      {children}
    </div>
  );
}
