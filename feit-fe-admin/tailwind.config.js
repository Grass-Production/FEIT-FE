// import { withTV } from 'tailwind-variants/transformer';
/** @type {import('tailwindcss').Config} */

export default ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bitter: ['Bitter', 'sans-serif'],
        plusjakartasans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'card-home': '4px 4px 0px 0px #14121BCC',
        'active-button': '6px 6px 0px 0px #0B58FE',
        'success-button': '6px 6px 0px 0px #11D0B9',
        'error-button': '6px 6px 0px 0px #FE330B',

      },
      colors: {
        'white': '#FBFBFB',
        primary: {
          'blue-50': '#E7EEFF',
          'blue-400': '#3C79FE',
          'blue-500': '#0B58FE',
          'blue-600': '#0A50E7',
          'blue-700': '#083EB4',
          'blue-800': '#06308C',
          'black': '#1A1823'
        },
        secondary: {
          'gray': '#858585',
        },
        tetiary: {
          'silver': '#DCDCDC'
        },
        semantic: {
          'danger': '#E72E0A',
          'warning': '#E1C536',
          'success': '#0FBDA8',
        },
        foundation: {
          'violet-600': '#2B283A',
          'brightcyan-700': '#7AAC9E'
        },
        background: {
          'able': '#FBFBFB',
          'disable': '#F6F6F6'
        },
        textcolor: {

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
        'Tsm': ['0.875rem', '1.25rem'],

        'heading-1': ['6rem', '7.5rem'],
        'heading-2': ['4.75rem', '7.125rem'],
        'heading-3': ['3.5rem', '5.25rem'],
        'heading-4': ['3rem', '3.75rem'],
        'heading-5': ['2.5rem', '3.75rem'],
        'heading-6': ['2.25rem', '3.375rem'],
        'heading-7': ['1.5rem', '2.25rem'],

        'body-1': ['1.125rem', '1.688rem'],
        'body-2': ['1rem', '1.5rem'],
        'body-3': ['0.875rem', '1.313rem'],

        'button-1': ['1rem', '1.5rem'],
        'button-2': ['0.875rem', '1.313rem'],

        'label-1': ['1rem', '1.5rem'],
        'label-2': ['0.875rem', '1.313rem'],
        'label-3': ['0.75rem', '1.313rem'],

        'caption-1': ['0.75rem', '1.125rem'],
        'caption-2': ['0.625rem', '0.938rem']

      },
      fontWeight: {
        'heading-1': '500',
        'heading-2': '500',
        'heading-3': '600',
        'heading-4': '700',
        'heading-5': '700',
        'heading-6': '700',
        'heading-7': '700',

        'body-1': '400',
        'body-2': '400',
        'body-3': '400',

        'button-1': '700',
        'button-2': '700',

        'label-1': '500',
        'label-2': '500',
        'label-3': '500',

        'caption-1': '500',
        'caption-2': '500'
      },
      typography: {
        DEFAULT: {
          typography: {
            DEFAULT: {
              '.Heading1': {
                fontWeight: '600',
                fontSize: '6rem',
                lineHeight: '1',
              },
              '.Heading2': {
                fontWeight: '300',
                fontSize: '3.75rem',
                lineHeight: 'normal',
              },
              '.Heading3': {
                fontWeight: '600',
                fontSize: '3rem',
                lineHeight: 'normal',
              },
              '.Heading4': {
                fontWeight: '400',
                fontSize: '2.125rem',
                lineHeight: 'normal',
              },
              '.Heading5': {
                fontWeight: '400',
                fontSize: '1.5rem',
                lineHeight: 'normal',
              },
              '.Heading6': {
                fontWeight: 'bold',
                fontSize: '1.25rem',
                lineHeight: 'normal',
              },
              '.Subtitle1': {
                fontWeight: '500',
                fontSize: '1.25rem',
                lineHeight: 'normal',
              },
              '.Subtitle2': {
                fontWeight: '500',
                fontSize: '1rem',
                lineHeight: 'normal',
              },
              '.Body1': {
                fontWeight: '400',
                fontSize: '1rem',
                lineHeight: 'normal',
              },
              '.Body2': {
                fontWeight: '400',
                fontSize: '0.875rem',
                lineHeight: 'normal',
              },
            },
          },
        }
      }
    },
  },
  plugins: [

  ]
})

