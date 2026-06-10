/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#EEF3FF",
          100: "#DEE9FF",
          200: "#C5D7FF",
          500: "#2563EB",
          600: "#1D4ED8",
          700: "#1B3FB0",
        },
        ink: {
          DEFAULT: "#0B1B3B",
          2:       "#1B2A4A",
        },
        slate:  "#51607A",
        muted:  "#6B7894",
        line:   "#E6EAF2",
        "line-2": "#D9DFEC",
        soft:   "#F5F7FB",
        success: {
          DEFAULT: "#15A35A",
          50:      "#E8F8F0",
          100:     "#C7ECD7",
        },
        warn: {
          DEFAULT: "#B4791A",
          50:      "#FBF3E4",
        },
      },
      fontFamily: {
        sans: ["Cairo", "Segoe UI", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        xs:   "0 1px 2px rgba(11,27,59,.06)",
        sm:   "0 2px 8px rgba(11,27,59,.06)",
        md:   "0 8px 24px rgba(11,27,59,.08)",
        lg:   "0 20px 48px rgba(11,27,59,.12)",
        xl:   "0 36px 80px rgba(11,27,59,.16)",
        blue: "0 12px 30px rgba(37,99,235,.30)",
      },
    },
  },
  plugins: [],
}
