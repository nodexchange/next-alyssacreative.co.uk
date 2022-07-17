module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ascreative': '#353954',
        'white-scroll-nav': 'rgba(255, 255, 255, 0.8)',
      },
      backgroundColor: {
        'ascreative': '#353954',
        'light-purple': '#f6f0ff',
        'dark-purple': '#353954',
        'ascreative': '#353954',
        'white-nav': 'rgba(255, 255, 255, 0.8)',
        'white-scroll-nav': 'rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
}