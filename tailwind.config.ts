import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  // en tailwind v4, los colores se definen en global.css con @theme
  plugins: [],
};

export default config;
