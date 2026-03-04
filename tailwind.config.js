/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '96rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(0.75rem)' },
        },
      },
      animation: {
        'float': 'float 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
