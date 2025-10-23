/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00FFFF',
        'hot-pink': '#FF4081',
        'neon-green': '#39FF14',
        'dark-charcoal': '#121212',
        'cyber-gray': '#1a1a1a',
        'electric-blue': '#0FF'
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'sans': ['Inter', 'sans-serif']
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        glow: {
          '0%': { 
            'box-shadow': '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF'
          },
          '100%': { 
            'box-shadow': '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'pulse-neon': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 }
        }
      }
    },
  },
  plugins: [],
}