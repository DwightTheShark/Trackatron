module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
  plugins: [require("daisyui")],
  plugins: [require('@tailwindcss/aspect-ratio')],

}
