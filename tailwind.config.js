import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7A1CAC",
        secondary: "#AD49E1",
        background: "#FFFFFF",
        foreground: "#2E073F",
        accent: "#EBD3F8",
        surface: "#F5F5F5",
        dark: {
          primary: "#AD49E1",
          secondary: "#7A1CAC",
          background: "#2E073F",
          foreground: "#EBD3F8",
          accent: "#AD49E1",
          surface: "#3A104E",
        },
        success: "#10B981",
        error: "#EF4444",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}
