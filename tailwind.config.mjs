/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        condensed: ['"Saira Extra Condensed"', 'ui-sans-serif', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#334155',
            a: { color: '#0284c7', '&:hover': { color: '#0ea5e9' } },
            h1: { color: '#0f172a' },
            h2: { color: '#0f172a' },
            h3: { color: '#0f172a' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
