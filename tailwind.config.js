const base = require('./src/data/theme/base.json')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        'neon': [
          '0 0 10px rgba(255, 0, 0, 1)',
          '0 0 10px rgba(255, 0, 0, 1)',
          '0 0 10px rgba(255, 0, 0, 1)',
        ]
      },
      keyframes: {
        'enter-from-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      backgroundImage: { 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))' },
      colors: {
        ...base,
        'midnigth': '#0B0D16',
        'ligth': '#E5E5E5',
        'vingateBlue': '#24374F',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite'
      },
      boxShadow: {
        default: '-1px -1px 16px #3D4F80',
        button: '0px 0px 16px rgba(0, 0, 0, 0.16)',
        box: '0px 0px 6px rgba(0, 0, 0, 0.16)'
      },
      fontFamily: {
        'sans': ['Roboto Condensed', 'sans-serif']
      },

    }
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true }), '@headlessui/tailwindcss']
}
