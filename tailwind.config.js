// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",        // Adjust according to your project structure
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",          // If using the /app directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
