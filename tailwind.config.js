/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '220px',
      // => @media (min-width: 220px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1736px',
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10%)', opacity: 1 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)' }, // Starts from off-screen
          '100%': { transform: 'translateX(0)' }, // Ends at original position
        },
        slideRight: {
          '0%': { transform: 'translateX(0)' }, // Starts from off-screen
          '100%': { transform: 'translateX(100%)' }, // Ends at original position
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        slideUp: 'slideUp 0.2s ease-out forwards', // You can adjust the duration and easing
        slideLeft: 'slideLeft 0.6s ease-out forwards',
        slideRight: 'slideRight 0.6s ease-out forwards',
      },

      colors: {
        primary: '#1F2437',
        blue: '#0067ED',
        purple: '#7e5bef',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        yellow: '#ffc82c',
        'gray-dark': '#1D2143',
        gray: '#898a9c',
        'gray-light': '#d3dce6',
      },
      backgroundImage: {
        common: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url('assets/images/pagetitle-bg.jpg')",
        Journey: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('assets/images/Journey.jpg')",
        homeHero: "url('/src/assets/images/slides/slider-mainbg-001.png')",
        homeServices: "url('/src/assets/images/bg-image/row-bgimage-5.png')",
        visitorBg: "url('/src/assets/images/bg-image/row-bgimage-7.jpg')",
        blogImage: "url('/src/assets/images/bg-image/row-bgimage-8.png')",
      },
    },

    fontFamily: {
      font: ['Roboto', 'serif'],
    },
  },
  plugins: [],
};
