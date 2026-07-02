import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-raised": "var(--surface-raised)",
        border: "var(--border)",
        ink: "var(--text-primary)",
        "ink-secondary": "var(--text-secondary)",
        "ink-muted": "var(--text-muted)",
        accent: {
          DEFAULT: "var(--accent)",
          strong: "var(--accent-strong)",
          soft: "var(--accent-soft)",
        },
        gold: {
          DEFAULT: "var(--gold)",
          light: "var(--gold-light)",
          dark: "var(--gold-dark)",
        },
        success: "var(--success)",
        danger: "var(--danger)",
        warning: "var(--warning)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        "neu-sm": "0.75rem",
        neu: "1.25rem",
        "neu-lg": "1.75rem",
      },
      boxShadow: {
        "neu-raised":
          "8px 8px 16px var(--neu-shadow-dark), -8px -8px 16px var(--neu-shadow-light)",
        "neu-raised-sm":
          "4px 4px 8px var(--neu-shadow-dark), -4px -4px 8px var(--neu-shadow-light)",
        "neu-pressed":
          "inset 4px 4px 8px var(--neu-shadow-dark), inset -4px -4px 8px var(--neu-shadow-light)",
        "neu-pressed-sm":
          "inset 2px 2px 4px var(--neu-shadow-dark), inset -2px -2px 4px var(--neu-shadow-light)",
        "skeu-metal":
          "inset 0 1px 1px rgba(255,255,255,0.6), inset 0 -2px 3px rgba(0,0,0,0.35), 0 3px 6px rgba(0,0,0,0.4)",
        "focus-ring": "0 0 0 3px var(--accent-soft)",
      },
      keyframes: {
        "fill-rise": {
          "0%": { height: "0%" },
          "100%": { height: "var(--fill-to, 60%)" },
        },
        "dial-in": {
          "0%": { strokeDashoffset: "var(--dial-full, 283)" },
          "100%": { strokeDashoffset: "var(--dial-offset, 100)" },
        },
      },
      animation: {
        "fill-rise": "fill-rise 900ms cubic-bezier(0.16,1,0.3,1) forwards",
        "dial-in": "dial-in 900ms cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
