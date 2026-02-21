function TaskItem({ tasks, setTasks, onTaskClick, onDeletedClick }) {
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

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
          className="flex gap-1 border border-slate-500 rounded-md py-3 bg-amber-200"
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
