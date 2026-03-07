import { useContext, useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import { GlobalContext } from "../Contexts/GlobalContext";

function ProjectList() {
  const { projects } = useContext(GlobalContext);

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
