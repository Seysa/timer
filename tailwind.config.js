module.exports = {
  content: ["./src/**/*.{html,js,vue}"], // Make sure 'vue' is added here since this is a Vue project
  theme: {
    extend: {
      colors: {
        pastel: "#f9f9ea",
        primary: "#a3b995",
        silver: "#c0c1b5",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
