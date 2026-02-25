import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className="bg-amber-100 dark:bg-amber-500  dark:text-white w-full py-10">
      <h1>Gerencie tarefas e projetos</h1>
      <nav className="flex justify-around">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projetos</NavLink>
        <NavLink to="/completed">Feitos</NavLink>
        <NavLink to="/about">Sobre</NavLink>
      </nav>
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
