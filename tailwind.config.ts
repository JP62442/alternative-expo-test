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
        altBackground: "var(--alt-background)",
        altForeground: "var(--alt-foreground)",
        altWhite: "var(--white)",
        altGray: "var(--gray)",
        magenta: "var(--magenta)",
        altMagenta: "var(--alt-magenta)",
        altMagentaLight: "var(--alt-magenta-light)",
        altMagentaStrong: "var(--alt-magenta-strong)",
        orange: "var(--orange)",
        altOrange: "var(--alt-orange)",
        altBlue: "var(--alt-blue)",
        altTexts: "var(--alt-texts)",
      },
      backgroundImage: {
        gradientGold: "var(--gradient-gold)",
        gradientOrange: "var(--gradient-orange)",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        anton: "var(--font-anton)",
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
    },
  },
  plugins: [],
} satisfies Config;
