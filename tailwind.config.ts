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
        bakery: {
          50: "#f8f5f0",
          100: "#eeddc3",
          200: "#e6d7b3",
          300: "#d9cfa3",
          400: "#ccb793",
          500: "#bf9f73",
          600: "#a88753",
          700: "#917033",
          800: "#7a5913",
          900: "#634200",
          950: "#422d00",
        },
      },
    },
  },
  plugins: [],
};

export default config;
