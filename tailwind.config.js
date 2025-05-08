/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0C7B93',
          50: '#E6F3F7',
          100: '#CCE7EF',
          200: '#99CFDF',
          300: '#66B7CF',
          400: '#339FBF',
          500: '#0C7B93',
          600: '#0A6276',
          700: '#074A59',
          800: '#05313C',
          900: '#02191E',
        },
        secondary: {
          DEFAULT: '#00A8A8',
          50: '#E6F7F7',
          100: '#CCEFEF',
          200: '#99DFDF',
          300: '#66CFCF',
          400: '#33BFBF',
          500: '#00A8A8',
          600: '#008686',
          700: '#006565',
          800: '#004343',
          900: '#002222',
        },
        accent: {
          DEFAULT: '#F9A620',
          50: '#FEF5E6',
          100: '#FDEBCC',
          200: '#FBD799',
          300: '#FAC366',
          400: '#F8AF33',
          500: '#F9A620',
          600: '#C7841A',
          700: '#956313',
          800: '#63420D',
          900: '#322106',
        },
        neutral: {
          background: '#F4F4F4',
          card: '#FFFFFF',
          text: '#1F2937',
        },
        success: '#10B981', // Green
        warning: '#F59E0B', // Amber
        error: '#EF4444',   // Red
      },
      borderRadius: {
        'xl': '16px',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
};