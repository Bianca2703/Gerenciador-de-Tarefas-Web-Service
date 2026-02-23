import { GlobalContext } from "./GlobalContext";
import { useState } from "react";

function GlobalProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  return (
    <GlobalContext.Provider value={{ tasks, setTasks }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
