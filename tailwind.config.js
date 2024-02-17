/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'green-primary-color': '#97bf0f',
        'green-secondary-color': '#79990c',
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/bg1.jpg')",
      },
    },
  },
  plugins: [],
};
