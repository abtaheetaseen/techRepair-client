/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito"]
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar'),
  ],
}
