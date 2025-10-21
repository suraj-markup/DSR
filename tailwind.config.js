/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        // Light Mode Colors
        primary: {
          DEFAULT: '#1E3A8A', // Updated to darker blue
          50: '#E6F0F8',
          100: '#CCE1F1',
          200: '#99C3E3',
          300: '#66A5D5',
          400: '#3387C7',
          500: '#1E3A8A', // Main primary - dark blue
          600: '#1E40AF', // Darker blue
          700: '#1D4ED8', // Even darker blue
          800: '#061224',
          900: '#040A16',
        },
        secondary: {
          DEFAULT: '#3B82F6', // Updated to blue
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6', // Main secondary - blue
          600: '#2563EB', // Darker blue
          700: '#1D4ED8', // Even darker blue
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        accent: {
          DEFAULT: '#F7941D',
          50: '#FEF4E6',
          100: '#FDE9CC',
          200: '#FBD399',
          300: '#F9BD66',
          400: '#F7A733',
          500: '#F7941D', // Main accent
          600: '#C67617',
          700: '#955811',
          800: '#633B0B',
          900: '#321D06',
        },
        background: {
          DEFAULT: '#F8F9FA',
          secondary: '#FFFFFF',
        },
        text: {
          primary: '#333333',
          secondary: '#666666',
          muted: '#999999',
        },
        border: {
          DEFAULT: '#E0E0E0',
          light: '#F0F0F0',
        },
        success: {
          DEFAULT: '#10B981',
          50: '#ECFDF5',
          500: '#10B981',
          600: '#059669',
        },
        error: {
          DEFAULT: '#EF4444',
          50: '#FEF2F2',
          500: '#EF4444',
          600: '#DC2626',
        },
        warning: {
          DEFAULT: '#F59E0B',
          50: '#FFFBEB',
          500: '#F59E0B',
          600: '#D97706',
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #0f172a 100%)',
        'gradient-card': 'linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%)',
        'gradient-cta': 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
        'gradient-accent': 'linear-gradient(135deg, rgba(247, 148, 29, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'gradient': 'gradient 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(247, 148, 29, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(247, 148, 29, 0.8)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(247, 148, 29, 0.5)',
        'glow-lg': '0 0 30px rgba(247, 148, 29, 0.8)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',   // 1408px
        '9xl': '96rem',   // 1536px
        '10xl': '104rem', // 1664px
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
}
