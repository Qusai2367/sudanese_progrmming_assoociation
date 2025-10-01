"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";
import { Moon, Sun } from "react-feather";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark");
    const iconRef = useRef();

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "dark";
        setTheme(savedTheme);
    }, []);

    useEffect(() => {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        if (iconRef.current) {
            iconRef.current.classList.add("rotate");
            setTimeout(() => iconRef.current.classList.remove("rotate"), 500);
        }
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const themeIcon =
        theme === "light" ? (
            <Sun ref={iconRef} className="theme-icon" />
        ) : (
            <Moon ref={iconRef} className="theme-icon" />
        );

    function handleTextWhite() {
        return theme === "light" ? "text-dark" : "text-white";
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, themeIcon , handleTextWhite}}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}

export default ThemeProvider;
