/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'dojo-black': '#1C1C1C',
        'dojo-red': '#BC002D',
        'dojo-white': '#F6F8FA',
        'dojo-light': '#F6F6F2',
        'dojo-gray': '#6C6C6C'
      },
      fontFamily: {
        'inter': ['Inter Tight', 'Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
