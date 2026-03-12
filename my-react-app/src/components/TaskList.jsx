import TaskItem from "./TaskItem";
import { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";

function TaskList({ tasks, showActions }) {
  const { onTaskClick, onDeletedClick } = useContext(GlobalContext);

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          showActions={showActions}
          onTaskClick={onTaskClick}
          onDeletedClick={onDeletedClick}
        />
      ))}
    </ul>
  );
}

export default TaskList;
