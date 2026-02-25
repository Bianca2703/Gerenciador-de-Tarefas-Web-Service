import { useContext, useState } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";
import { v4 } from "uuid";

function ProjectForm() {
  const { projects, setProjects } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //Previne comportamento padrão do form de regarregar a página cada vez que o dado é enviado
  function handleSubmit(event) {
    event.preventDefault();
    onAddClick(title, description);
    setTitle("");
  }

  //Adiciona novo Projeto e muda estado de projects
  function onAddClick() {
    const newProjectAdd = {
      id: v4(),
      title,
      isCompleted: false,
      description,
    };
    setProjects([...projects, newProjectAdd]);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        className="border border-black dark:border-slate-400 rounded-md px-4 py-2 "
        type="text"
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

export default ProjectForm;
