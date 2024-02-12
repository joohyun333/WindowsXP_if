/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        'NanumGothic' : ['"NanumGothic"'],
        'NanumGothic-Bold' : ['"NanumGothic-Bold"'],
        'NanumGothic-ExtraBold' : ['"NanumGothic-ExtraBold"'],
      },

    },
  },
  plugins: [],
}

