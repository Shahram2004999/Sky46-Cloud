import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        huawei: {
          primary: '#FF0000',
          secondary: '#1A1A1A',
          accent: '#00D7FF',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
export default config
