import { withTV } from 'tailwind-variants/transformer';
/** @type {import('tailwindcss').Config} */

export default withTV({
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
      }
    },
  },
  plugins: [],
})

