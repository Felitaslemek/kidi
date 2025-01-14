/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Untuk warna
      colors: {
        background: '#f6f6f6', //Untuk background 
        primary: '297BFF',
        putih: '#ffffff',
      },

      //Untuk space
      spacing: {
        '8xl': '80px',
      },
    },
  },
  plugins: [],
};

