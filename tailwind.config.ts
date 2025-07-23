import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/library/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/library/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/library/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        bg: "var(--bg)",
        text: "var(--text)",
        hover: "var(--hover)",
        border: "var(--border)",
        placeholder: "var(--placeholder)",
        shadow: "var(--shadow)",
      },
    },
  },
  plugins: [],
} satisfies Config;
