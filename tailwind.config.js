const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './**/*.html',
    './**/*.md'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')
  ],
  future: {
    removeDeprecatedGapUtilities: true,
  }
}
