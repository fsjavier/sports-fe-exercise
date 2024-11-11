import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff", // very light blue
          100: "#bae6fd", // light blue
          500: "#0284c7", // blue
          900: "#0c4a6e", // dark blue
        },
        secondary: {
          100: "#f3e8ff", // light purple
          500: "#a855f7", // purple
          900: "#581c87", // dark purple
        },
        accent: {
          100: "#ffe4e6", // light red
          500: "#fb7185", // red
          900: "#881337", // dark red
        },
        muted: {
          100: "#a0a3aa", // light gray
          500: "#7b808b", // gray
          900: "#454c5a", // dark gray
        },
        warning: {
          100: "#fffbeb", // light yellow
          500: "#f59e0b", // yellow
          900: "#854d0e", // dark yellow
        },
      },
    },
  },
  plugins: [],
};

export default config;
