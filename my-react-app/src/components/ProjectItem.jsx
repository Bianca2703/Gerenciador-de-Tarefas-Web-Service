import { useContext, useState } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";

function ProjectItem({ project }) {
  const { projects, setProjects } = useContext(GlobalContext);
  const [showDetails, setShowDetails] = useState(false);

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

  function onInfoTasks() {
    setShowDetails(!showDetails);
  }

  return (
    <li
      key={project.id}
      className=" border border-slate-500 dark:border-slate-600 rounded-md py-3 px-4 bg-amber-200 dark:bg-amber-600"
    >
      <div className="flex items-center">
        <Link className="mr-6" to={`/editProject/${project.id}`}>
          <FaRegEdit />
        </Link>

        <Link
          to={`/projects/${project.id}`}
          className={` ${project.isCompleted == true ? "line-through" : ""}`}
        >
          {project.title}
        </Link>

        <button className="ml-5" onClick={onInfoTasks}>
          <IoInformationCircleOutline />
        </button>

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
      </div>

      {showDetails && (
        <div className="mt-3 border-t border-slate-400 dark:border-slate-500 pt-3 text-sm text-slate-700 dark:text-slate-200 space-y-1">
          <p>
            <span className="font-medium">Descrição:</span>{" "}
            {project.description}
          </p>
          <span>
            <span className="font-medium">Categoria:</span> {project.category}
          </span>
        </div>
      )}
    </li>
  );
}

export default ProjectItem;
