/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
        again: ["Loved By The King","cursive"]
      },
      letterSpacing: {
        tightest: '-1.98px',
        normal: '-0.64px',
      },
      backgroundImage: {
        'bg-gradient': 'linear-gradient(116deg, rgba(11, 16, 25, 0.91) 40.55%, #2E2F45 117.48%)',
        'text-gradient': 'linear-gradient(90deg, #4B7AFF 0%, #F7609C 100%)',
      },
      colors: {
        blue1: '#202436',
        'btn-color': '#4B7AFF',
        blue2: '#0E1420',
        blue3: '#080C13',
        bgrey:"#2E2F45",
        grey: '#555555',
      },
      screens: {
        mobile: '375px',
        tablet: '768px',
        laptop: '1440px',
        desktop: '1920px',

      },
    },
  },
  plugins: [],
}
