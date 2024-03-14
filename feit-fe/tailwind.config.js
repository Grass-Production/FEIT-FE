// import { withTV } from 'tailwind-variants/transformer';
/** @type {import('tailwindcss').Config} */

export default ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          'primary': '#3A00E5',
          'subtile': '#F7F5FF',

        }
      },
      spacing: {
        '120px': '7.5rem',
      },
      fontSize: {

        'Dlg': ['4rem', '4.5rem'],
        'Dmd': ['3rem', '3.5rem'],
        'Dsm': ['2.5rem', '3rem'],

        'Hlg': ['2rem', '2.5rem'],
        'Hmd': ['1.75rem', '2.25rem'],
        'Hsm': ['1.5rem', '2rem'],

        'Tlg': ['1.375rem', '1.75rem'],
        'Tmd': ['1rem', '1.5rem'],
        'Tsm': ['0.875rem', '1.25rem']

      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              '@apply truncate overflow-hidden whitespace-nowrap': '',
            }
          }
        }
      }
    },
  },
  plugins: [

  ]
})

