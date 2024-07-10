/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
      },
      fontSize: ['hover', 'focus', 'placeholder'],
      fontSize: {
        'frSize': ['5rem', '1.2'],
      },
      colors: {
        'main': '#FEFFC5',
        'header': '#231F20',
        'search': '#FFEF62',
        'button': '#FAFD57',
        'listing': '#191A17',
        'yellow': '#ffff00',
        'gray': '#808080',
        'dark-gray': '#505050',
        'card': '#121210',
        'cart': '#D9D9D9',
      },
      height: {
        'frImageH': '590px',
        'conImageH': '236px',
        'cardh': '340px',
        'albumh': '180px',
      },
      width: {
        'frImageW': '450px',
        'nav-i-width': '190px',
        'gw':'80px',
        'albumw': '180px',
        'cardw': '220px',
        'contact': '310px',
        'pageW': '900px',
      },
      screens: {
        "wide": "1440px"
      },
      maxWidth: {
        'fullPage': '900px',
      },
    },
  },
  plugins: [],
}