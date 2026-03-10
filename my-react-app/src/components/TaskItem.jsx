import { useContext, useState } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
//import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";

function TaskItem({ task, showActions = true }) {
  const { onTaskClick, onDeletedClick } = useContext(GlobalContext);
  const [showDetails, setShowDetails] = useState(false);

  function onInfoTasks() {
    setShowDetails(!showDetails);
  }

  return (
    <li className="border border-slate-500 dark:border-slate-600 rounded-md py-3 px-4 bg-amber-200 dark:bg-amber-600">
      <div className="flex items-center">
        {showActions && (
          <Link className="mr-6" to={`/edit/${task.id}`}>
            <FaRegEdit />
          </Link>
        )}

        <p className={`${task.isCompleted == true ? "line-through" : ""}`}>
          {task.title}
        </p>

        <button className="ml-5" onClick={onInfoTasks}>
          <IoInformationCircleOutline />
        </button>

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
      </div>

      {showDetails && (
        <div className="mt-3 border-t border-slate-400 dark:border-slate-500 pt-3 text-sm text-slate-700 dark:text-slate-200 space-y-1">
          <p>
            <span className="font-medium">Descrição:</span> {task.description}
          </p>
          <span>
            <span className="font-medium">Categoria:</span> {task.category}
          </span>
        </div>
      )}
    </li>
  );
}

export default TaskItem;
