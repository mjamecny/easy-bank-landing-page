/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    theme: {
      fontFamily: {
        sans: ["Public Sans", "sans-serif"],
      },
      spacing: {
        0.2: "2px",
        0.4: "4px",
        0.8: "8px",
        1.2: "12px",
        1.6: "16px",
        2.4: "24px",
        3.2: "32px",
        4.8: "48px",
        6.4: "64px",
        8: "80px",
        9.6: "96px",
        12.8: "128px",
      },
      fontSize: {
        1: "10px",
        1.2: "12px",
        1.4: "14px",
        1.6: "16px",
        1.8: "18px",
        2: "20px",
        2.4: "24px",
        3: "30px",
        3.6: "36px",
        4.4: "44px",
        5.2: "52px",
        6.2: "62px",
        7.4: "74px",
        8.6: "86px",
        9.8: "98px",
      },
      colors: {
        "dark-blue": "hsl(233, 26%, 24%)",
        "lime-green": "hsl(136, 65%, 51%)",
        "bright-cyan": "hsl(192, 70%, 51%)",
        "grayish-blue": "hsl(233, 8%, 62%)",
        "light-grayish-blue": "hsl(220, 16%, 96%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
}
