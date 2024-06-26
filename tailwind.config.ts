import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffd946',
        secondary: '#371506',
        action: '#fffb4c',
        gray: '#8d8377',
        'gray-text': '#fffaf2',
        'green-fluor': '#0F0',
        'white-400': '#F5F6F9',
      },
    },
  },
  plugins: [],
}

export default config
