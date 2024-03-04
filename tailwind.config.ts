import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#54e5f8",
        secondary: "#164e63",
      },
    },
  },
  plugins: [],
};

export default config;
