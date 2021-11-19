module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'green-primary': '#7BB357',
        'green-secondary': '#3D655F',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
