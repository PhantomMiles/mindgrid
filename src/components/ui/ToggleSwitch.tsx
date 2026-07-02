"use client";

import { cn } from "@/lib/utils";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}

/**
 * A skeuomorphic switch: neumorphic inset track + a thumb with a metallic
 * highlight, mimicking a physical flip switch rather than a flat MD/iOS toggle.
 */
export function ToggleSwitch({ checked, onChange, label }: ToggleSwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className={cn(
        "focus-ring relative inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full p-1 transition-colors duration-200",
        "neu-inset"
      )}
    >
      <span
        className={cn(
          "absolute h-6 w-6 rounded-full transition-transform duration-200 ease-out",
          "skeu-metal-gold",
          checked ? "translate-x-6" : "translate-x-0"
        )}
        aria-hidden="true"
      />
    </button>
  );
}
