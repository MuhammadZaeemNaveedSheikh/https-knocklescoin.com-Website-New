/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#FEED01',
        'blue': '#17245E',
        'purple': '#537293',
        'orange': '#FFDC3F'
      }
    },
  },
  plugins: [],
})
