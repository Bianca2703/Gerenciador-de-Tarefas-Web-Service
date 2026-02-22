import { useEffect, useState } from "react";
import { v4 } from "uuid";

function TaskForm({ tasks, setTasks }) {
  const [title, setTitle] = useState("");
  function onSubmmitTask(title) {
    const newTaskAdd = {
      id: v4(),
      title,
      isCompleted: false,
    };
    setTasks([...tasks, newTaskAdd]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmmitTask(title);
    setTitle("");
  }

  const pendentTasks = tasks.filter(
    (task) => task.isCompleted === false,
  ).length;

  useEffect(() => {
    document.title = `TaskMaster (${pendentTasks} pendentes)`;
  }, [pendentTasks]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-amber-100 dark:bg-amber-500 flex flex-col gap-2 py-7 p-5"
    >
      <input
        type="text"
        placeholder="Digite sua tarefa..."
        className="border border-black dark:border-slate-400 rounded-md px-4 py-2 "
        value={title}
        onChange={
          (event) =>
            setTitle(
              event.target.value,
            ) /**"valor do input que o usuário acabou de editar" */
        }
      />
      <button className="border border-black dark:border-slate-400 bg-amber-300 dark:bg-amber-700 rounded-md py-1">
        Adicionar
      </button>
    </form>
  );
}

export default TaskForm;
