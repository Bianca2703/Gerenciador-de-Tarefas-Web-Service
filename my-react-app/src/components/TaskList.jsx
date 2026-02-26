import { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";

function TaskList() {
  const { tasks } = useContext(GlobalContext);

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
export default TaskList;
