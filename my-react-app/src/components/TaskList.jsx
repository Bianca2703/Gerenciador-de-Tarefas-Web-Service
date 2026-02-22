import { useState, useEffect } from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, setTasks }) {
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

  return <TaskItem tasks={tasks} setTasks={setTasks} />;
}

export default TaskList;
