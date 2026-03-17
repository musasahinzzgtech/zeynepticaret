/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        stone: {
          50: '#f9f8f6',
          100: '#f3f2ef',
          200: '#e7e5e0',
          400: '#b7b5b0',
          500: '#78716c',
          600: '#57534e',
          700: '#45403c',
          800: '#292524',
          900: '#1c1917',
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'reveal': 'reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%': { transform: 'scale(1.1)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')],
};
