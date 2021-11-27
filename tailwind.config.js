module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      lightBrown: '#f1efe5',
      lightGreen: '#E8FCD9',
      lightGrey: '#f2f2f2',
      accentRed: '#DA6864',
      accentGreen: '#55AB67',
      accentBrown: '#E6E2D6',
      accentBlue: '#5B75A6',
      accentGrey: '#807970',
      darkBrown: '#918E81',
      selectedItemGrey: '#CCCFDC',
      selectedItemBorderGrey: '#C5C5CF'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
