import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "var(--white)",
        gray: "var(--gray)",
        magenta: "var(--magenta)",
        altMagenta: "var(--alt-magenta)",
        orange: "var(--orange)",
        altOrange: "var(--alt-orange)",
        altBlue: "var(--alt-blue)",
        altTexts: "var(--alt-texts)",
      },
    },
  },
  plugins: [],
} satisfies Config;
