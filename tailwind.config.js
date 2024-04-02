/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        brandPrimary: '#00ded4',
        brandSecondary: '#d60c83',
        brandPrimaryDark: '#00a69e',
        brandBlack: '#000',
        // brandBlack: '#020403',
        // brandSecondary: '#45FED7',

        // brandPrimary: '#419D9E',
        // brandPrimary: '#43FC92',
        // brandPrimary: '#00c4bb',

        // brandSecondary: '#F82255',
        // brandPrimary: '#34B3B0',
        // brandPrimary: '#3370FF',
        brandGray: '#F6F8F9',
        // brandBlack: '#191919',

        // brandBlack: '#0f121c',
        // brandBlack: '#05080C',
        // brandBlack: '#080710',
        // brandBlack: '#1d1d1d',
        // brandBlack: '#050404',
        // brandBlack: '#000',
        // brandBlack: '#020403',
        menuBg: 'rgba(8, 7, 16, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
