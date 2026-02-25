import { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";

function TaskItem() {
  const { tasks, setTasks } = useContext(GlobalContext);

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

  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex gap-1 border border-slate-500 dark:border-slate-600 rounded-md py-3 bg-amber-200 dark:bg-amber-600"
        >
          <p
            className={`w-full  ${task.isCompleted == true ? "line-through" : ""}`}
          >
            {task.title}
          </p>
          <button className="w-1/5" onClick={() => onTaskClick(task.id)}>
            V
          </button>
          <button className="w-1/5" onClick={() => onDeletedClick(task.id)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskItem;
