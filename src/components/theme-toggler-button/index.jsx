import { useContext } from "react"
import { Button } from "../button"
import { ThemeContext, themes } from "../../contexts/theme-context.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light);
    };

    return (
        <>
            <Button onClick={toggleTheme}>
                <FontAwesomeIcon icon={theme.icon} />
            </Button>
        </>

    )


}