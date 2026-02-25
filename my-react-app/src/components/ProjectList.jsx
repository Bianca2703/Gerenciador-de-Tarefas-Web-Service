import { useContext, useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import { GlobalContext } from "../Contexts/GlobalContext";

function ProjectList() {
  const { projects, setProjects } = useContext(GlobalContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedProject = localStorage.getItem("projects");
    savedProject ? setProjects(JSON.parse(savedProject)) : []; //se savedProject existir, então execute setproject. Se não, não faça nada.
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects, isLoaded]);

  return (
    <ul>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </ul>
  );
}

export default ProjectList;
