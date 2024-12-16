 /** @type {import('tailwindcss').Config} */
 module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      container: {
        center: true,
        screens: {
          '2xl': '1200px',
        },
      },
      extend: {
        colors: {
          'blue-zodiac' : '#191A42',
          'moody-blue' : '#7C7EB9',
          'nile-blue' : '#24254B',
          'picton-blue' : '#48C3D7',
          'black-rock' : '#111235',
          'moody-blue' : '#7C7DB9',
          'silver' : '#C9CAD4',
          'ghost-white' : '#F6F8FA',
        },
        backgroundImage: {
          'hero-image': "url('/public/assets/images/webp/hero-bg-image.webp')",
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
          '72' : '72px'
        },
        boxShadow: {
          "analytics-api": "0px 10px 40px 0px #41566B0D"
        }
      },
    },
    plugins: [],
  }