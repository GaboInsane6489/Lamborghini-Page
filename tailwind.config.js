// tailwind.config.js
export default {
    content: [
        "./index.html",
        "./frontend/src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#6366f1",
                "primary-foreground": "#ffffff",
                ring: "#c7d2fe",
            },
        },
    },
    plugins: [],
}
