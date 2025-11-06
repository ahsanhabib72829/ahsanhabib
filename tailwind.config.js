// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // কনটেন্ট পাথ এখানে সবচেয়ে গুরুত্বপূর্ণ!
  content: [
    './*.html',        // রুটে থাকা index.html বা অন্য HTML ফাইল
    './src/**/*.{html,js,jsx,ts,tsx}', // src ফোল্ডারের ভেতরের সব ফাইল
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}