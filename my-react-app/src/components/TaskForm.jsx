import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";

function TaskForm() {
  const { tasks, setTasks } = useContext(GlobalContext);
  const [title, setTitle] = useState("");

  //Cria nova tarefa e muda o estado
  function onSubmmitTask(title) {
    //chamada dentro do hanldesubmit
    const newTaskAdd = {
      id: v4(),
      title,
      isCompleted: false,
    };
    setTasks([...tasks, newTaskAdd]);
  }

  //Impede comportamento padrão do form de recarregar a página
  function handleSubmit(event) {
    event.preventDefault();
    onSubmmitTask(title);
    setTitle("");
  }

  //Quantidade de tarefas pendentes
  const pendingTasks = tasks.filter(
    (task) => task.isCompleted === false,
  ).length;

  //Responsável por mudar o título da página cada vez que pendingTasks mudar
  useEffect(() => {
    document.title = `TaskMaster (${pendingTasks} pendentes)`;
  }, [pendingTasks]);

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
      <button
        type="submit"
        className="border border-black dark:border-slate-400 bg-amber-300 dark:bg-amber-700 rounded-md py-1"
      >
        Adicionar{" "}
        {/*Não precisa do onClick com a função por que quem está controlando o envio é o form*/}
        {/*Ao clicar, o form é submetido e handleSubmit roda */}
      </button>
    </form>
  );
}

export default TaskForm;
