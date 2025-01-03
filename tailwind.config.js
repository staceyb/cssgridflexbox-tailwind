/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['haymakerregular', 'cursive'],
        mono: ['Fira Code', 'monospace'],
        sans: [
          'Noto Sans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      screens: {
        tiny: '200px',
        xsm: '500px',
        smmd: '750px',
        smlg: '1000px',
      },
    },
  },
  plugins: [],
};
