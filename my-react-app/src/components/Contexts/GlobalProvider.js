import { GlobalContext } from "./GlobalContext";

function GlobalProvider() {
  const [tasks, setTasks] = useState([]);

  return (
    <GlobalContext.Provider
      value={{ tasks, setTasks }}
    ></GlobalContext.Provider>
  );
}

export default GlobalProvider;
