/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandCream: '#f9f9f7',
        brandOlive: '#4f5339',
        brandBrass: '#B59461',
        guinnessBlack: '#0D0D0D',
        charcoal: '#121212',
        surfaceLow: '#f4f4f2',
        surfaceContainer: '#eeeeec',
        textMain: '#1a1c1b',
        textMuted: '#47473e',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
