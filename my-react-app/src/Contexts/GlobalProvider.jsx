import { GlobalContext } from "./GlobalContext";
import { useState, useEffect, useCallback, useMemo } from "react";

function GlobalProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  //Carrega os dados quando o componente inicia
  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((resp) => resp.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  //Marca tarefa como feita
  const onTaskClick = useCallback(
    (taskId) => {
      const task = tasks.find((task) => task.id === taskId);

      fetch(`http://localhost:5000/tasks/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isCompleted: !task.isCompleted,
        }),
      })
        .then((resp) => resp.json())
        .then((updatedTask) => {
          const newTasks = tasks.map((task) =>
            task.id === taskId ? updatedTask : task,
          );

          setTasks(newTasks);
        });
    },
    [tasks],
  );

  //Deleta tarefa
  const onDeletedClick = useCallback(
    (taskId) => {
      const task = tasks.find((task) => task.id === taskId);

      fetch(`http://localhost:5000/tasks/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isDeleted: !task.isDeleted,
        }),
      })
        .then((resp) => resp.json())
        .then((updatedTask) => {
          const newTasks = tasks.map((task) =>
            task.id === taskId ? updatedTask : task,
          );

          setTasks(newTasks);
        });
    },
    [tasks],
  );
  //mantém só as tarefas cujo id é diferente do id que eu quero deletar
  /*const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);*/

  const value = useMemo(
    () => ({
      tasks,
      setTasks,
      projects,
      setProjects,
      onTaskClick,
      onDeletedClick,
    }),
    [tasks, projects, onTaskClick, onDeletedClick],
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export default GlobalProvider;
