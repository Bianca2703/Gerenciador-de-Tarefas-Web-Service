import { useContext, useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import { GlobalContext } from "../Contexts/GlobalContext";

function ProjectList() {
  const { projects, setProjects } = useContext(GlobalContext);
  const [isLoaded, setIsLoaded] = useState(false);

  //Recupera os itens salvos
  useEffect(() => {
    const savedProject = localStorage.getItem("projects");
    savedProject ? setProjects(JSON.parse(savedProject)) : []; //se savedProject existir, então execute setproject. Se não, não faça nada.
    setIsLoaded(true);
  }, []);

  //salva os itens todas vez que projects e isLoaded mudar
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
      {/*Percorre o array projects e, para cada projeto,
    retorna um componente ProjectItem passando
    o objeto project como prop, ou seja, transforma o array 
    projects em uma lista de componentes ProjectItem*/}
    </ul>
  );
}

export default ProjectList;
