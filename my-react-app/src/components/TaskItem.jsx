import { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function TaskItem({ task, showActions = true }) {
  const { onTaskClick, onDeletedClick } = useContext(GlobalContext);

  return (
    <li className="flex items-center border border-slate-500 dark:border-slate-600 rounded-md py-3 px-4 bg-amber-200 dark:bg-amber-600">
      <button className="mr-6">
        <FaRegEdit />
      </button>
      <p className={`${task.isCompleted == true ? "line-through" : ""}`}>
        {task.title}
      </p>

      {showActions && (
        <div className="flex gap-2 ml-auto">
          <button
            className="mr-3"
            onClick={() => {
              onTaskClick(task.id);
            }}
          >
            <MdOutlineDone />
          </button>
          <button
            className="mr-2"
            onClick={() => {
              onDeletedClick(task.id);
            }}
          >
            <MdDelete />
          </button>
        </div>
      )}
    </li>
  );
}

export default TaskItem;
