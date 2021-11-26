module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
    },
  },
  daisyui: {
    themes: [
      {
        covidTheme: {
          primary: "#EC5863" /* Primary color */,
          "primary-focus": "#8462f4" /* Primary color - focused */,
          "primary-content":
            "#ffffff" /* Foreground content color to use on primary color */,

          secondary: "#4285F4" /* Secondary color */,
          "secondary-focus": "#f3cc30" /* Secondary color - focused */,
          "secondary-content":
            "#ffffff" /* Foreground content color to use on secondary color */,

          accent: "#37cdbe" /* Accent color */,
          "accent-focus": "#2aa79b" /* Accent color - focused */,
          "accent-content":
            "#ffffff" /* Foreground content color to use on accent color */,

          neutral: "#3d4451" /* Neutral color */,
          "neutral-focus": "#2a2e37" /* Neutral color - focused */,
          "neutral-content":
            "#ffffff" /* Foreground content color to use on neutral color */,

          "base-100":
            "#FAFBFD" /* Base color of page, used for blank backgrounds */,
          "base-200": "#B0B0B0" /* Base color, a little darker */,
          "base-300": "#616161" /* Base color, even more darker */,
          "base-content":
            "#000000" /* Foreground content color to use on base color */,

          info: "#2094f3" /* Info */,
          success: "#009485" /* Success */,
          warning: "#ff9900" /* Warning */,
          error: "#ff5724" /* Error */,

          
        },
      },
    ],
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
