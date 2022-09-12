/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: '#f25f3a',
        brightRedLight: '#f6866a',
        brightRedSupLight: '#fdece7',
        darkBlue: '#242d52',
        darkGrayishBlue: '#9095a7',
        veryDarkBlue: '#1d1e25',
        veryPaleRed: '#ffefeb',
        veryLightGray: '#fafafa',
        newBlue: '#3a78ff',
        newBlueLight: '#6d9bff',
        newBlueSupLight: '#ecf2ff',
      },
    },
  },
  plugins: [],
}
