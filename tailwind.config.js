/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FDF7F3',
          100: '#FBECE4',
          200: '#F6D5C4',
          300: '#EEB59A',
          400: '#E48C67',
          500: '#D9531E', // Signature Mysore Terracotta/Saffron
          600: '#BF3F11',
          700: '#9E320C',
          800: '#7F2B0E',
          900: '#68260F',
          950: '#381005',
        },
        turmeric: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B', // Golden Ghee / Turmeric
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        pureveg: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          500: '#22C55E',
          600: '#16A34A', // Traditional Green Veg Badge
          700: '#15803D',
          800: '#166534',
        },
        warmbg: {
          50: '#FFFDF9',
          100: '#FAF6EE', // Authentic Banana Leaf & Sand Light Tone
          200: '#F2EBDC',
          300: '#E5D9C3',
          400: '#D1BEA1',
        },
        charcoal: {
          800: '#27272A',
          900: '#18181B',
          950: '#0F0F12',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 4px 20px -2px rgba(139, 69, 19, 0.08), 0 2px 6px -1px rgba(139, 69, 19, 0.04)',
        'warm-lg': '0 10px 30px -4px rgba(139, 69, 19, 0.12), 0 4px 10px -2px rgba(139, 69, 19, 0.06)',
      }
    },
  },
  plugins: [],
}
