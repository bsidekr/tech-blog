/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: { preflight: false }, // Disable base style of Tailwind
  theme: {
    extend: {},
  },
  plugins: [],
}
