/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#443E8D', 
        dark: '#1e1e1e',
        light: '#fafafa',        // terang
        secondary: '#5F5F5F',   // ungu
        accent: '#22c55e',      // hijau
        muted: '#64748b',       // abu
      },
    },
  },
  plugins: [],
}