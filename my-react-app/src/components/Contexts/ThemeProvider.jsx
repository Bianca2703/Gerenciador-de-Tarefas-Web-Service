import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saveTheme = localStorage.getItem("theme");
    return saveTheme ? saveTheme : "light";
  });

  useEffect(() => {
    const root = document.documentElement; //html

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  //Salva o tema no localstorage sempre que theme mudar
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
