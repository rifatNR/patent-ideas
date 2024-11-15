/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontSize: {
                xxs: "0.7rem",
            },
            colors: {
                custom: {
                    orange: {
                        50: "#FFE5B0",
                        100: "#FCC85E",
                        200: "#FBB11A",
                    },
                    red: {
                        50: "#FFBEBE",
                        live: "#FF3636",
                        breaking: "#FF0000",
                    },
                    green: {
                        50: "#E6FFE5",
                        300: "#2AED0A",
                    },
                    black: {
                        10: "#1F1F1F",
                    },
                },
            },
            fontFamily: {
                roboto: ["Roboto Slab", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
            screens: {
                print: { raw: "print" },
                xs: "392px",
            },
            zIndex: {
                loader: "4",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
