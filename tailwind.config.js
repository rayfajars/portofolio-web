/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F5F2E9",
          light: "#FAF8F3",
          dark: "#EBE6D9",
        },
        navy: {
          DEFAULT: "#1B213B",
          light: "#252D4A",
          dark: "#141828",
        },
        border: "hsl(228 18% 82%)",
        input: "hsl(228 18% 82%)",
        ring: "hsl(228 35% 18%)",
        background: "#F5F2E9",
        foreground: "#1B213B",
        primary: {
          DEFAULT: "#1B213B",
          foreground: "#F5F2E9",
        },
        secondary: {
          DEFAULT: "#EBE6D9",
          foreground: "#1B213B",
        },
        destructive: {
          DEFAULT: "hsl(0 84% 60%)",
          foreground: "hsl(0 0% 98%)",
        },
        muted: {
          DEFAULT: "#EBE6D9",
          foreground: "hsl(228 12% 45%)",
        },
        accent: {
          DEFAULT: "#252D4A",
          foreground: "#F5F2E9",
        },
        popover: {
          DEFAULT: "#FAF8F3",
          foreground: "#1B213B",
        },
        card: {
          DEFAULT: "#FAF8F3",
          foreground: "#1B213B",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(27, 33, 59, 0.08)",
        card: "0 8px 32px rgba(27, 33, 59, 0.12)",
      },
    },
  },
  plugins: [],
};
