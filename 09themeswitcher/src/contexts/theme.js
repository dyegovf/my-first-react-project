import { createContext, useContext } from "react";

const ThemeContext = createContext({
    theme: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

const ThemeProvider = ThemeContext.Provider;

function useTheme() {
    return useContext(ThemeContext);
}

export { ThemeContext };
export { ThemeProvider };
export default useTheme;