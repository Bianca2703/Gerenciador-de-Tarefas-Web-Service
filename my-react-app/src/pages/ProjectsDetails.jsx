import { useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";

function ProjectsDetails() {
  const { id } = useParams();

  const {tasks} = useContext(GlobalContext);

  const filteredTasks = tasks.filter((task) =>
      task.projectId === id )//Se estiver dentro de um projeto, filtra pelo projectId

  return (
    <div className="flex flex-col p-6 space-y-4 shadow dark:bg-slate-800">
      <p>Descrição</p>
      <TaskForm projectId={id} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default ProjectsDetails;
