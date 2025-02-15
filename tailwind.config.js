/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        dark: {
          default: '#ffffff',
          1: '#808080',
          2: '#bfbfbf',
          3: '#1f319d',
        },
      },
    },
  },
  plugins: [],
};
