const colors = {
  'tiffany-blue': '#7ec7cc',
  mint: '#64b993',
  denim: '#205caa',
  // 'oxford-blue': '#00223d',
  'oxford-blue': '#00203a',
  'columbia-blue': '#d6edff',
};

/* CSS HEX */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        white: '#d6edff',
        primary: colors['tiffany-blue'],
        secondary: colors['mint'],
        tertiary: colors['denim'],
        'dark-surface': colors['oxford-blue'],
      },
    },
    fontFamily: {
      sans: ['Overlock', 'cursive'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
};
