import { useTheme } from "../Context/ThemeContext";

const ThemeSwitcher = () => {
    const { themeIcon, toggleTheme, theme } = useTheme();
    return (
        <button
            onClick={toggleTheme}
            className={`p-2 border border-0 ${
                theme === "light" ? "text-white" : "text-white"
            }`}
            style={{ background: "none" }}
        >
            {themeIcon}
        </button>
    );
};

export default ThemeSwitcher;
