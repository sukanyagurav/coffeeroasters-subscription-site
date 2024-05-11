/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '280px',
      md: '768px',
      lg: '990px',
      xl: '1440px',
    },
  },
  plugins: [],
}

