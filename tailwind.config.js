// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'scale(0.5)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(103.4deg, #04071D 16.66%, #0C0E23 81.61%)',
      },
    },
  },
  plugins: [],
};
