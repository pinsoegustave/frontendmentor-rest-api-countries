/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
darkMode: 'class',
  theme: {
    extend: {
      colors : {
        'neutralDGrey' : '#999292',
        'darkBlue' : 'hsl(209, 23%, 22%)',   //Dark Blue (Dark Mode Elements): 
        'veryDarkBlue' : 'hsl(207, 26%, 17%)', // Very Dark Blue (Dark Mode Background): 
        'darkBlueText' : 'hsl(200, 15%, 8%)',   //Very Dark Blue (Light Mode Text)
        'darkGray' : 'hsl(0, 0%, 52%)',  // Dark Gray (Light Mode Input): 
        'lightGray' : 'hsl(0, 0%, 98%)',  //Very Light Gray (Light Mode Background):
        'white' : 'hsl(0, 0%, 100%)',  //White (Dark Mode Text & Light Mode Elements): 
      }
    },
  },
  plugins: [],
}

