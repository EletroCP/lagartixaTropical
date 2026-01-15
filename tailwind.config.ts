import type { Config } from "tailwindcss";

const config: Config = {
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
        purpleCustom: '#4E2769',
        greenCustom: '#43A773',
        pinkCustom: '#E04382',
        orangeCustom: '#ED8F32',
        beigeCustom: '#ECDCD9',
        darkPurpleCustom: '#371F31',
      },
      fontFamily: {
        hagridRegular: ['Hagrid-Regular', 'sans-serif'],
        hagridItalic: ['Hagrid-Italic', 'sans-serif'],
        hagridExtraBold: ['Hagrid-Extrabold-trial', 'sans-serif'],
        hagridExtraBoldItalic: ['Hagrid-Extrabold-Italic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
