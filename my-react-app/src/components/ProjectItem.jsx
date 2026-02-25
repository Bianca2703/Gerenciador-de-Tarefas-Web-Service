import { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";

function ProjectItem({ project }) {
  const { projects, setProjects } = useContext(GlobalContext);

  function onProjectDoneClick(projectId) {
    const newProjects = projects.map((project) => {
      if (projectId === project.id) {
        return { ...project, isCompleted: !project.isCompleted };
      }
      return project;
    });
    setProjects(newProjects);
  }

  function onDeletedClick(projectId) {
    const newProjects = projects.filter((project) => project.id !== projectId);
    setProjects(newProjects);
  }

  return (
    <li
      key={project.id}
      className="flex gap-1 border border-slate-500 dark:border-slate-600 rounded-md py-3 bg-amber-200 dark:bg-amber-600"
    >
      <p
        className={`w-full  ${project.isCompleted == true ? "line-through" : ""}`}
      >
        {project.title}
      </p>
      <button
        className="w-1/5"
        onClick={() => {
          onProjectDoneClick(project.id);
        }}
      >
        V
      </button>
      <button
        className="w-1/5"
        onClick={() => {
          onDeletedClick(project.id);
        }}
      >
        X
      </button>
    </li>
  );
}

export default ProjectItem;
