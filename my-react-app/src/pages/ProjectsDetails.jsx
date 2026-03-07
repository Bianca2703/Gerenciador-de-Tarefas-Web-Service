import { useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";

function ProjectsDetails() {
  const { id } = useParams();
  const { tasks, projects } = useContext(GlobalContext);

  const filteredTasks = tasks.filter((task) => task.projectId === id); //Se estiver dentro de um projeto, filtra pelo projectId | mostra apenas as tarefas daquele projeto
  //percorre todas as tasks e entrega as tasks cujo projectId é igual ao id da URL
  console.log("projects:", projects);
  const project = projects.find((project) => project.id === String(id)); //find porque quero apenas um resultado
  //Percorra o array e me devolva o primeiro item que satisfaz a condição

  if (!project) {
    return <p>Projeto não encontrado</p>;
  }

  return (
    <div className="flex flex-col p-6 space-y-4 shadow dark:bg-slate-800">
      <div className="bg-amber-200 dark:bg-slate-700 rounded-lg p-4 shadow-sm space-y-2">
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white">
          {project.title}
        </h2>

        <p className="text-slate-600 dark:text-slate-300">
          {project.description /*Só acesse descricao se project existir */}
        </p>

        <span className="inline-block text-sm px-3 py-1 rounded-full bg-amber-300 dark:bg-amber-600 text-slate-800 dark:text-white">
          {project.category}
        </span>
      </div>
      <TaskForm projectId={id} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default ProjectsDetails;
