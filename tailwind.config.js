/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          scissorsGradientStart: 'hsl(39, 89%, 49%)',
          scissorsGradientEnd: 'hsl(40, 84%, 53%)',
          paperGradientStart: 'hsl(230, 89%, 62%)',
          paperGradientEnd: 'hsl(230, 89%, 65%)',
          rockGradientStart: 'hsl(349, 71%, 52%)',
          rockGradientEnd: 'hsl(349, 70%, 56%)',
        },
        neutral: {
          darkText: 'hsl(229, 25%, 31%)',
          scoreText: 'hsl(229, 64%, 46%)',
          headerOutline: 'hsl(217, 16%, 45%)',
        },
        background: {
          radialGradientStart: 'hsl(214, 47%, 23%)',
          radialGradientEnd: 'hsl(237, 49%, 15%)',
        },
      },
      fontFamily: {
        barlowSemiCondensed: ['"Barlow Semi Condensed"', 'sans-serif'],
      },      
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.gradient-border-rock': {
          background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, hsl(349, 71%, 52%), hsl(349, 70%, 56%)) border-box',
          borderRadius: '50rem',
          border: '1rem solid transparent',
        },
        '.gradient-border-paper': {
          background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, hsl(230, 89%, 62%), hsl(230, 89%, 65%)) border-box',
          borderRadius: '50rem',
          border: '1rem solid transparent',
        },
        '.gradient-border-scissor': {
          background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, hsl(39, 89%, 49%), hsl(40, 84%, 53%)) border-box',
          borderRadius: '50rem',
          border: '1rem solid transparent',
        },
      });
    },
  ],
}
