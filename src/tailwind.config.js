module.exports = {
  purge: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    letterSpacing: {
      'mono-wide': '0.3em',
    },
    fontSize: {
      'mono-xs': '0.8rem',
    },
    boxShadow: {
      soft: '0 10px 30px rgba(0, 0, 0, 0.12)',
      large: '0 20px 60px rgba(0, 0, 0, 0.12)',
    },
    screens: {
      hv: { raw: '(hover: hover)' },
    },
    },
  },
  variants: {
    extend: {
      borderColor: ['responsive', 'hover', 'focus', 'group-hover']
    },
  },
  plugins: [],
}
