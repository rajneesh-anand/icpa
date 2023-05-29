const colors = require("tailwindcss/colors");
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgba(var(${variableName}))`;
  };
}

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: withOpacity("--color-yellow"),
        orange: withOpacity("--color-orange"),
        white: "#ffffff",
      },
      textColor: {
        primary: withOpacity("--color-primary"),
        orange: withOpacity("--color-orange"),
        base: withOpacity("--color-base"),
      },
      backgroundColor: {
        primary: withOpacity("--color-primary"),
        orange: withOpacity("--color-orange"),
        yellow: withOpacity("--color-yellow"),
        base: withOpacity("--color-base"),
        fill: withOpacity("--color-fill"),
      },
      boxShadow: {
        card: "0px 0px 6px rgba(79, 95, 120, 0.1)",
        cardHover: "0px 0px 8px rgba(79, 95, 120, 0.18)",
        dropDown: "0px 10px 40px rgba(41, 50, 68, 0.15)",
        cookies: "0 -2px 3px rgba(0, 0, 0, 0.04)",
        contact: "0 1px 10px rgba(75, 90, 130, 0.1)",
      },
    },
  },
};
