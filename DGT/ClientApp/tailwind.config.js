module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'trans-gray': 'rgba(0, 0, 0, 0.5)'
      }
    }
  },
  variants: {
    extend: {
      // ...
      gridAutoColumns: ['hover', 'focus'],
    }
  },
  plugins: [],
};
