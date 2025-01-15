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
        //Background
        color_background_light: '#f6f6f6',
        color_background_dark: '#1E1E1E',

        //Primary
        color_primary_100_light: '#D4EBFF',
        color_primary_200_light: '#A9D4FF',
        color_primary_300_light: '#7EB9FF',
        color_primary_400_light: '#5EA2FF',
        color_primary_500_light: '#297BFF',
        color_primary_600_light: '#1D5FDB',
        color_primary_700_light: '#1446B7',
        color_primary_800_light: '#0D3093',
        color_primary_900_light: '#07217A',

        //Secondary
        color_secondary_100_light: '#F5FDCD',
        color_secondary_200_light: '#A9D4FF',
        color_secondary_300_light: '#D6F36A',
        color_secondary_400_light: '#C0E744',
        color_secondary_500_light: '#A2D80D',
        color_secondary_600_light: '#86B909',
        color_secondary_700_light: '#6B9B06',
        color_secondary_800_light: '#537D04',
        color_secondary_900_light: '#416702',

        //Warning
        color_warning_100_light: '#FFE7D7',
        color_warning_200_light: '#FFCAB0',
        color_warning_300_light: '#FFA688',
        color_warning_400_light: '#FF846B',
        color_warning_500_light: '#FF4B3A',
        color_warning_600_light: '#DB2B2A',
        color_warning_700_light: '#6B9B06',
        color_warning_800_light: '#931227',
        color_warning_900_light: '#7A0B25',

        //Nuetral
        color_nuetral_100_light: '#FFFFFF',
        color_nuetral_200_light: '#C0C0C0',
        color_nuetral_300_light: '#AAAAAA',
        color_nuetral_400_light: '#949494',
        color_nuetral_500_light: '#7E7E7E',
        color_nuetral_600_light: '#545454',
        color_nuetral_700_light: '#3D3D3D',
        color_nuetral_800_light: '#282828',
        color_nuetral_900_light: '#121212',
      },

      //Untuk space
      spacing: {
        '20px': '20px',
        '80px': '80px',
        '120px': '120px',
      },

      //Font
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans']
      }
    },
  },
  plugins: [],
};

