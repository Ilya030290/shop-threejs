/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '10vh': '10vh',
        '15vh': '15vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '70vh': '70vh',
        '75vh': '75vh',
        '80vh': '80vh',
        '85vh': '85vh',
        '90vh': '90vh',
        '36': '9rem',
        '96': '24rem',
      },
      height: {
        '10vh': '10vh',
        '15vh': '15vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '30vh': '30vh',
        '70vh': '70vh',
        '75vh': '75vh',
        '80vh': '80vh',
        '85vh': '85vh',
        '90vh': '90vh',
        '128': '32rem',
        '132': '34rem',
        '134': '36rem',
        '136': '38rem',
        '138': '40rem',
        '140': '42rem',
      },
      width: {
        '128': '32rem',
        '134': '36rem',
      },
      fontSize: {
        'lg': '1.4rem',
      },
      boxShadow: {
        'variant_1': '0px 5px 15px rgba(0, 0, 0, 0.09)',
        '3xl': '0 0 8px 1.5px rgba(0, 0, 0, 0.4)',
      },
      backgroundColor: {
        'bg-black-1': 'rgba(0, 0, 0, 0.01)',
        'bg-black-10': 'rgba(0, 0, 0, 0.8)',
        'bg-orange-variant_1': 'rgba(254, 95, 30, 0.1)',
      }
    },
  },
  plugins: [],
}
