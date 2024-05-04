/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", './node_modules/flowbite/**/*.js'],
    theme: {
        extend: {
            colors: {
                'node': '#539E43',
                'angular': '#E23237',
                'action': '#ff9c00',
                'second-action': '#c27803'
            }
        },
        screens: {
            'sm': '576px',
            'md': '960px',
            'lg': '1440px',
          },
    },
    plugins: [require('flowbite/plugin')],
};
