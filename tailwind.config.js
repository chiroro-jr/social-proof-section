/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html'],
    theme: {
        colors: {
            white: 'hsl(0, 0%, 100%)',
            black: 'hsl(0, 0%, 0%)',
            transparent: 'transparent',
            'soft-pink': 'hsl(333, 80%, 67%)',
            magenta: {
                'very-dark': 'hsl(300, 43%, 22%)',
                'light-grayish': 'hsl(300, 24%, 96%)',
                'dark-grayish': 'hsl(303, 10%, 53%)',
            },
        },
        fontFamily: {
            'league-spartan': ['League Spartan', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
}
