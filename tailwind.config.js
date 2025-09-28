/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'sovir-primary': '#0053CC',
        'sovir-primary-dark': '#004BB5',
        'sovir-accent': '#FBBF24',
        'sovir-bg-light': '#F9FAFB',
        'sovir-bg-lighter': '#F3F4F6',
        'sovir-text-dark': '#111827',
        'sovir-text-muted': '#6B7280',
      },
    },
  },
  plugins: [],
};
