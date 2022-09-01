module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                primary: ["Epilogue", "sans-serif;"],
            },
            colors: {
                primary: "#1DC071",
                secondary: "#6F49FD",
                darkStroke: "#3A3A43",
                darkSecondary: "#1C1C24",
                softDark: "#22222C",
                darkSoft: "#24242C",
                darkBG: "#13131A",
                darkRed: "#422C32",
                text1: "#171725",
                text2: "#4B5264",
                text3: "#808191",
                text4: "#B2B3BD",
                iconColor: "#A2A2A8",
                white: "#FFFFFF",
                whiteSoft: "#FCFBFF",
                graySoft: "#FCFCFC",
                whiteStrock: "#F1F1F3",
                lite: "#FCFCFD",
                error: "#EB5757",
            },
            backgroundImage: {
                ellipse: "url(./assets/images/ellipse.png)",
            },
        },
    },
    plugins: [],
};
