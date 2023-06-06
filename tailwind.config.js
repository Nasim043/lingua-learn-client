/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'myprimary': '#fbbd0d',
      'myprimary1': '#ffc000',
      'mysecondary': '#2B3647',
    },
    extend: {
      fontFamily: {
        custom: ['Boing', 'Noto', '"Noto Sans JP"', '"Noto Sans KR"', '"Noto Sans SC"', '"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}