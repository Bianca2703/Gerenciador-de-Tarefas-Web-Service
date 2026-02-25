import { GlobalContext } from "./GlobalContext";
import { useState } from "react";

function GlobalProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  return (
    <GlobalContext.Provider value={{ tasks, setTasks, projects, setProjects }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
