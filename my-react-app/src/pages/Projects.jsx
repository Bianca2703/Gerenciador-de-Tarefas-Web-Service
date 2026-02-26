import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";

function Projects() {
  return (
    <div className="flex flex-col p-6 space-y-4 shadow dark:bg-slate-800">
      <h1 className="text-2xl dark:text-white">Projetos</h1>
      <ProjectForm />
      <div className="bg-amber-100 dark:bg-amber-500 p-5">
        <ProjectList />
      </div>
    </div>
  );
}
//A form field element should have an id or name attribute???

export default Projects;
