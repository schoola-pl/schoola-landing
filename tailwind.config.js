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
        medium: '#f4f3ed',
        default: '#E6E2D6',
        dark: '#918E81'
      },
      blue: {
        light: '#4A64A5',
        default: '#5B75A6'
      },
      emerald: {
        light: '#E8FCD9',
        dark: '#55AB67',
        darker: '#338945'
      },
      coolGray: {
        white: '#FFFFFF',
        light: '#f2f2f2',
        dark: '#807970'
      },
      red: {
        light: '#DA6864'
      },
      black: {
        classic: '#000000'
      }

      // selectedItemGrey: '#CCCFDC',
      // selectedItemBorderGrey: '#C5C5CF'
    }
  },
  variants: {
    extend: {
      gridTemplateColumns: {
        about: '60% 40%'
      }
    }
  },
  plugins: []
};
