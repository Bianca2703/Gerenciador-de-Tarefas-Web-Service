import { useContext, useEffect } from "react";
import { ThemeContext } from "./Contexts/ThemeContext";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className="bg-amber-100 dark:bg-amber-500  dark:text-white w-full py-10">
      <h1>Gerencie tarefas e projetos</h1>
      <button>Tarefas</button> <br />
      <button>Projetos</button> <br />
      <button
        onClick={() => {
          theme == "light" ? setTheme("dark") : setTheme("light");
        }}
      >
        {theme == "light" ? <FaRegSun /> : <FaRegMoon />}
      </button>
    </header>
  );
}

export default Header;
