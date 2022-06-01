const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './layouts/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                rubik: 'Rubik, sans-serif'
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            },
            colors: {
                'dark-theme': '#121212',
                'primary-dark': '#BB86FC',
                'primary-500': '#6200EE',
                'primary-700': '#3700B3',
                'secondary': '#03DAC5'
            },
        },
        screens: {
            'xs': '390px',
            ...defaultTheme.screens,
        }
    },
    plugins: [],
    important: true,
    darkMode: 'class',

}
