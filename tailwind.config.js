 /** @type {import('tailwindcss').Config} */
 module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      container: {
        center: true,
        screens: {
          
          md: '768px',
          '2xl': '1200px',
        },
      },
      extend: {
        colors: {
          'blue-zodiac' : '#191A42'
        },
        backgroundImage: {
          'hero-image': "url('/public/assets/images/png/hero-bg-image.png')",
        },
        fontSize: {
          'custom-3xl': '32px',
          'custom-6xl': '64px',
        },
        lineHeight: {
          '110': '110%',
          '130': '130%',
          '175': '175%',
          '225': '225%',
        },
      },
    },
    plugins: [],
  }