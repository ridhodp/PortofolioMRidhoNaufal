import type { Config } from "tailwindcss";

// Colors are CSS variables (see globals.css) so `html.light` swaps the whole theme.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: token("bg"),
          secondary: token("bg-2"),
        },
        line: token("line"),
        accent: {
          DEFAULT: token("accent"),
          contrast: token("accent-contrast"),
        },
        text: {
          primary: token("fg"),
          secondary: token("fg-2"),
          muted: token("fg-3"),
        },
      },
      boxShadow: {
        card: "var(--card-shadow)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
