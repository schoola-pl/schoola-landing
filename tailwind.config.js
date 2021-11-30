module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      amber: {
        light: '#f1efe5',
        default: '#E6E2D6',
        dark: '#918E81'
      },
      blue: {
        light: '#5B75A6'
      },
      emerald: {
        light: '#E8FCD9',
        dark: '#55AB67',
        darker: '#338945'
      },
      coolGray: {
        light: '#f2f2f2',
        dark: '#807970'
      },
      red: {
        light: '#DA6864'
      }
      // selectedItemGrey: '#CCCFDC',
      // selectedItemBorderGrey: '#C5C5CF'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
