import { createContext, useEffect } from "react";
import { useState } from "react"

export const themes = {
    light: {
        color: "#000000",
        backgroundColor: "#eeeeee",
        secondaryColor: "#aaaaaa",
        textColor: "#666666",
        icon: "fas fa-moon"
    },
    dark: {
        color: "#ffffff",
        backgroundColor: "#000000",
        secondaryColor: "#191919",
        textColor: "#666666",
        icon: "fas fa-sun"
    }
}

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
    const themeLocal = JSON.parse(localStorage.getItem('themeKey'));
    const themeStorage = themeLocal ? themeLocal : themes.light;

    const [theme, setTheme] = useState(themeStorage);
    
    useEffect(() => {
        window.localStorage.setItem('themeKey', JSON.stringify(theme))
    }, [theme]);

    useEffect(() => {
        const storedTheme = JSON.parse(localStorage.getItem('themeKey'));
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}