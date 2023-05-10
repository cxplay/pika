const colors = require("tailwindcss/colors");

module.exports = {
  content: ["pages/*.js", "components/*.js"],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
