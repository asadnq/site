const colors = {
  'tiffany-blue': '#7ec7cc',
  mint: '#64b993',
  denim: '#205caa',
  'oxford-blue': '#00223d',
  'columbia-blue': '#d6edff',
  gray: '#c1d4d3',
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
        'secondary-surface-dark': '#1f4132',
        tertiary: colors['denim'],
        'dark-surface': colors['oxford-blue'],
        'text-body': colors['gray'],
        // 'dark-surface-2': '#00203a',
        'dark-surface-2': ' #011a2f',
      },
    },
    fontFamily: {
      sans: ['Overlock', 'cursive'],
      serif: ['Merriweather', 'serif'],
      // serif: ['Poppins', 'serif'],
    },
  },
  plugins: [],
};
