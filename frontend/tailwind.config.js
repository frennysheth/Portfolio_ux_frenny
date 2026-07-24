/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        // Brand (theme-aware via CSS variables)
        rose_quartz: "#F9CBD6",
        blush: "#F2AFBC",
        wine: "rgb(var(--c-wine) / <alpha-value>)",
        wine_deep: "#7A1322",
        oat: "rgb(var(--c-oat) / <alpha-value>)",
        paper: "rgb(var(--c-paper) / <alpha-value>)",
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        sticky: "#FDF8E2",
        sticky_pink: "#FCE3E8",
        sticky_mint: "#E8F0E2",
      },
      fontFamily: {
        serif: ['"Fraunces"', "serif"],
        sans: ['"Bricolage Grotesque"', "sans-serif"],
        display: ['"Fraunces"', "serif"],
        italic: ['"Instrument Serif"', "serif"],
        hand: ['"Caveat Brush"', "cursive"],
        handwriting: ['"Homemade Apple"', "cursive"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "tape-wiggle": { "0%,100%": { transform: "rotate(-3deg)" }, "50%": { transform: "rotate(2deg)" } },
        "scribble": { "0%": { strokeDashoffset: "1000" }, "100%": { strokeDashoffset: "0" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "tape-wiggle": "tape-wiggle 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
