import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        border: "var(--border)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        card: "var(--card)",
        destructive: "var(--destructive)",
      },
      borderRadius: {
        md: "0.375rem",
      },
      spacing: {
        sm: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
      },
      fontFamily: {
        sans: [
          "proxima-nova",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        base: ["16px", { lineHeight: "1.6" }],
      },
      maxWidth: {
        content: "40rem",
        wide: "48rem",
        hero: "56rem",
      },
    },
  },
  plugins: [],
};

export default config;
