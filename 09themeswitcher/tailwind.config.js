/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",   // ✅ CORRECT PLACE
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  