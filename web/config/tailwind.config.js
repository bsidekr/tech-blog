/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*.{js,jsx,ts,tsx}',
    '../node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
  ],
  corePlugins: { preflight: false }, // Disable base style of Tailwind
  theme: {
    extend: {
      fontFamily: {
        gmarket: 'GmarketSansMedium',
        notoSansKr: 'Noto Sans KR',
      },
    },
  },
  plugins: [],
}
