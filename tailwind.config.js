module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-desktop": "url('/src/assets/images/bg-desktop-dark.jpg')",
        "background-mobile": "url('/src/assets/images/bg-mobile-dark.jpg')",
      },
      colors: {
        "color-main": "#25273c",
      },
      borderRadius: {
        "radius-circle": "50%",
      },
    },
  },
  plugins: [],
};
