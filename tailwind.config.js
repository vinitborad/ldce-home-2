module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths to your template files
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background": "url('/src/assets/images/background-parallax.jpg')",
      },
    }, // Add your custom theme configurations here
  },
  plugins: [], // Add any Tailwind CSS plugins here
};
