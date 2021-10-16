module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        pulseFirst: {
          '0%, 100%': {
            oppacity: '1'
        },
        '50%': {
          oppacity: '.5'
        },
      },
        },
        animation: {
          pulseFirst: 'pulse 5s ease-in-out infinite',
        }
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
