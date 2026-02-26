import { GlobalContext } from "./GlobalContext";
import { useState, useEffect } from "react";

function GlobalProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  //Marca tarefa como feita
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  //Deleta tarefa
  function onDeletedClick(taskId) {
    //mantém só as tarefas cujo id é diferente do id que eu quero deletar
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  //recupera os itens
  useEffect(() => {
    const saveTasks = localStorage.getItem("tasks");

    saveTasks ? setTasks(JSON.parse(saveTasks)) : [];
    setIsLoaded(true);
  }, []);

  //salva os itens
  useEffect(() => {
    if (!isLoaded) {
      //se for false não continua
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks, isLoaded]);

  return (
    <GlobalContext.Provider
      value={{ tasks, projects, setProjects, onTaskClick, onDeletedClick }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
