module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        main: ['"Plus Jakarta Sans"', "sans-serif"],
        brand: ["Poppins", "sans-serif"],
      },
      colors: {
        dark: "#171717",
        semidark: "#525252",
        light: "#D4D4D4",
        rose: "#E11D48",
        semirose: "#FB7185",
        lightrose: "#FFE4E6",
        amber: "#D97706",
        semiamber: "#FBBF24",
        lightamber: "#FDE68A",
      },
    },
  },
  plugins: [],
};
