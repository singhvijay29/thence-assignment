/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      10: ["0.625rem", { lineHeight: "150%", letterSpacing: "0rem" }],
      12: ["0.75rem", { lineHeight: "150%", letterSpacing: "0rem" }],
      14: ["0.875rem", { lineHeight: "146%", letterSpacing: "0rem" }],
      16: ["1rem", { lineHeight: "150%", letterSpacing: "0rem" }],
      20: ["1.25rem", { lineHeight: "150%", letterSpacing: "0rem" }],
      21: ["1.3125rem", { lineHeight: "150%", letterSpacing: "0rem" }],
      24: ["1.5rem", { lineHeight: "150%", letterSpacing: "0rem" }],
      28: ["1.75rem", { lineHeight: "140%", letterSpacing: "0rem" }],
      30: ["1.875rem", { lineHeight: "130%", letterSpacing: "0rem" }],
      32: ["2rem", { lineHeight: "130%", letterSpacing: "0rem" }],
      36: ["2.25rem", { lineHeight: "130%", letterSpacing: "0rem" }],
      38: ["2.375rem", { lineHeight: "130%", letterSpacing: "0rem" }],
      40: ["2.5rem", { lineHeight: "140%", letterSpacing: "0rem" }],
      48: ["3rem", { lineHeight: "140%", letterSpacing: "0rem" }],
      56: ["3.5rem", { lineHeight: "130%", letterSpacing: "0rem" }],
      60: ["3.75rem", { lineHeight: "130%", letterSpacing: "0rem" }],
      64: ["4rem", { lineHeight: "130%", letterSpacing: "0rem" }],
      72: ["4.5rem", { lineHeight: "130%", letterSpacing: "0rem" }],
      80: ["5rem", { lineHeight: "130%", letterSpacing: "0rem" }],
      88: ["5.5rem", { lineHeight: "130%", letterSpacing: "0rem" }],
    },
    transitionDuration: {
      400: "400ms",
      600: "600ms",
    },
    transitionTimingFunction: {
      "gentle-out": "cubic-bezier(0.5, 0, 0, 1)",
      "gentle-out-quarter": "cubic-bezier(0.25, 0, 0, 1)",
    },
    backdropBlur: {
      50: "50px",
    },
  },
  plugins: [],
};
