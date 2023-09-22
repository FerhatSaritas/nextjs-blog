import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { ...defaultTheme },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["forest", "fantasy"],
    darkTheme: "forest",
    base: true,
    styled: true,
    logs: true,
    rtl: false,
    utils: true,
  },
};

