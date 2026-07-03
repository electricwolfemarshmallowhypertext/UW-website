/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                void: "#170B2E",      // Unicorn Night — deep indigo-purple backdrop
                slate: "#2E1760",     // Grape panel surface
                violet: "#FF6EC7",    // Bubblegum accent (primary brand color)
                ethereal: "#FFF6FB",  // Glitter White highlight
                text: "#F3E4FF",      // Cotton Candy body text
                amber: "#FFE066",     // Sunshine secondary accent
            },
            fontFamily: {
                serif: ['"Baloo 2"', 'cursive'],
                mono: ['"JetBrains Mono"', 'monospace'],
                sans: ['Quicksand', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
