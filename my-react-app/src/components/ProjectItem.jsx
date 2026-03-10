import { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function ProjectItem({ project }) {
  const { projects, setProjects } = useContext(GlobalContext);

  //Muta o isCompleted, marcando como projeto concluído
  function onProjectDoneClick(projectId) {
    const newProjects = projects.map((project) => {
      if (projectId === project.id) {
        return { ...project, isCompleted: !project.isCompleted };
      }
      return project;
    });
    setProjects(newProjects);
  }

  //Deleta projeto
  function onDeletedClick(projectId) {
    const newProjects = projects.filter((project) => project.id !== projectId);
    setProjects(newProjects);
  }

  return (
    <li
      key={project.id}
      className="flex items-center border border-slate-500 dark:border-slate-600 rounded-md py-3 px-4 bg-amber-200 dark:bg-amber-600"
    >
      <Link className="mr-6" to={`/editProject/${project.id}`}>
        <FaRegEdit />
      </Link>

      <Link
        to={`/projects/${project.id}`}
        className={` ${project.isCompleted == true ? "line-through" : ""}`}
      >
        {project.title}
      </Link>

      <div className="flex gap-2 ml-auto">
        <button
          className="mr-3"
          onClick={() => {
            onProjectDoneClick(project.id);
          }}
        >
          <MdOutlineDone />
        </button>
        <button
          className="mr-3"
          onClick={() => {
            onDeletedClick(project.id);
          }}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
}

export default ProjectItem;
