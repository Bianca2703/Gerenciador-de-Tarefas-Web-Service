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
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isDeleted: !task.isDeleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  //mantém só as tarefas cujo id é diferente do id que eu quero deletar
  /*const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);*/

  //recupera os itens
  useEffect(() => {
    const saveTasks = localStorage.getItem("tasks");
    const savedProject = localStorage.getItem("projects");

    if (saveTasks) {
      setTasks(JSON.parse(saveTasks));
    }

    if (savedProject) {
      setProjects(JSON.parse(savedProject));
    } //se savedProject existir, então execute setproject. Se não, não faça nada.

    setIsLoaded(true);
  }, []);

  //salva as tasks
  useEffect(() => {
    if (!isLoaded) {
      //se for false não continua
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks, isLoaded]);

  //salva os itens todas vez que projects e isLoaded mudar
  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects, isLoaded]);

  return (
    <GlobalContext.Provider
      value={{
        tasks,
        setTasks,
        projects,
        setProjects,
        onTaskClick,
        onDeletedClick,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
