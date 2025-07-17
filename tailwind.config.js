/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins",],
      },
      keyframes: {
        morph: {
          '0%, 100%': {
            borderRadius: '50%',
          },
          '33%': {
            borderRadius: '48% 52% 50% 50% / 55% 45% 55% 45%',
          },
          '66%': {
            borderRadius: '52% 48% 53% 47% / 45% 55% 45% 55%',
          },
        },
        borderRun: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        morph: 'morph 6s ease-in-out infinite',
        borderRun: 'borderRun 4s linear infinite',
      },
    },
  },
  plugins: [],
};

