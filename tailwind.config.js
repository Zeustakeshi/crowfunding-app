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
                primaryExtra: "#1BB068",
                primaryExtra2: "#F1FBF7",
                secondary: "#6F49FD",
                darkStroke: "#3A3A43",
                whiteStrock: "#F1F1F3",
                softDark: "#22222C",
                darkSecondary: "#1C1C24",
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
                lite: "#FCFCFD",
                error: "#EB5757",
            },
            boxShadow: {
                style1: "10px 10px 20px rgba(218, 213, 213, 0.15)",
                style2: "10px 10px 20px rgba(211, 211, 211, 0.25)",
                style3: "0px 2px 4px rgba(184, 184, 184, 0.03), 0px 6px 12px rgba(184, 184, 184, 0.02), 0px 12px 20px rgba(184, 184, 184, 0.03)",
                style3Dark: "10px 10px 20px rgba(2, 2, 2, 0.25)",
                style4: "-10px 15px 20px rgba(231, 228, 228, 0.15), 10px 10px 20px rgba(231, 228, 228, 0.15)",
                style4Dark:
                    "0px 16px 30px rgba(33, 25, 25, 0.17), 0px 30px 60px rgba(1, 2, 9, 0.2)",
            },
        },
    },
    plugins: [],
};
