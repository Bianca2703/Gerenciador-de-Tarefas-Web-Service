import { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";

function TaskItem({ task }) {
  const { onTaskClick, onDeletedClick } = useContext(GlobalContext);

  return (
    <li
      key={task.id}
      className="flex gap-1 border border-slate-500 dark:border-slate-600 rounded-md py-3 bg-amber-200 dark:bg-amber-600"
    >
      <p
        className={`w-full  ${task.isCompleted == true ? "line-through" : ""}`}
      >
        {task.title}
      </p>
      <button
        className="w-1/5"
        onClick={() => {
          onTaskClick(task.id);
        }}
      >
        V
      </button>
      <button
        className="w-1/5"
        onClick={() => {
          onDeletedClick(task.id);
        }}
      >
        X
      </button>
    </li>
  );
}

export default TaskItem;
