/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}"], // 僅在生產環境下移除未使用的樣式
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
