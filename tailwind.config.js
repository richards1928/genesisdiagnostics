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
          DEFAULT: '#201C4E', // Official Genesis Navy
          navy: '#201C4E',
        },
        medical: {
          DEFAULT: '#D20F11', // Official Genesis Red
          red: '#D20F11',
          dark: '#B30D0F', // Darker shade for hover
          light: '#F01518', // Lighter shade
        },
        accent: {
          DEFAULT: '#D20F11', // Red Accent
          red: '#D20F11',
        },
        background: {
          soft: '#F7FAFC', // Soft Background
        },
        text: {
          primary: '#172B3A',
          secondary: '#64748B',
        },
        border: {
          DEFAULT: '#E2E8F0',
        },
        success: {
          DEFAULT: '#16A34A',
        },
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'glow-red': '0 0 12px rgba(210, 15, 17, 0.2)',
        'glow-cyan': '0 0 12px rgba(0, 180, 216, 0.2)',
        'glow-red-sm': '0 0 8px rgba(210, 15, 17, 0.25)',
      },
      borderRadius: {
        DEFAULT: '8px',
        md: '8px',
        lg: '16px',
      }
    },
  },
  plugins: [],
}
