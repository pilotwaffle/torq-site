/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        torq: {
          black:   '#0d0d0f',
          darker:  '#080809',
          surface: '#111116',
          border:  '#1e1e26',
          muted:   '#2a2a35',
          grey:    '#8b8fa8',
          'grey-light': '#b0b4cc',
          red:     '#e8001c',
          'red-bright': '#ff1a1a',
          'red-dim':    '#7a0010',
          white:   '#f4f4f6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(232,0,28,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(232,0,28,0.03) 1px, transparent 1px)
        `,
        'radial-glow': 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(232,0,28,0.12) 0%, transparent 70%)',
        'radial-glow-center': 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(232,0,28,0.08) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
