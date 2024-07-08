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
          lizardGradientStart: 'hsl(261, 73%, 60%)',
          lizardGradientEnd: 'hsl(261, 72%, 63%)',
          cyanGradientStart: 'hsl(189, 59%, 53%)',
          cyanGradientEnd: 'hsl(189, 58%, 57%)',
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
      gradientColorStops: theme => ({
        ...theme('colors'),
        'scissors-gradient': ['hsl(39, 89%, 49%)', 'hsl(40, 84%, 53%)'],
        'paper-gradient': ['hsl(230, 89%, 62%)', 'hsl(230, 89%, 65%)'],
        'rock-gradient': ['hsl(349, 71%, 52%)', 'hsl(349, 70%, 56%)'],
        'background-radial': ['hsl(214, 47%, 23%)', 'hsl(237, 49%, 15%)'],
      }),
    },
  },
  plugins: [],
}
