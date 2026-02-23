import { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import { useContext } from "react";
import { GlobalContext } from "./Contexts/GlobalContext";

function TaskList() {
  const { tasks, setTasks } = useContext(GlobalContext);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saveTasks = localStorage.getItem("tasks");

    saveTasks ? setTasks(JSON.parse(saveTasks)) : [];
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      //se for false não continua
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks, isLoaded]);

  return <TaskItem />;
}

export default TaskList;
