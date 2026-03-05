import { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import StatusHeader from "../components/StatusHeader";

function Home() {
    const { tasks } = useContext(GlobalContext);
  
    const filteredTasks = tasks.filter((task) => !task.projectId && !task.isDeleted);//Se estiver na Home, mostra apenas tarefas sem projeto
     
  return (
    <div className="flex flex-col p-6 space-y-4 shadow dark:bg-slate-800">
      <h1 className="text-2xl dark:text-white">
        <StatusHeader />
      </h1>
      <TaskForm />
      <div className="bg-amber-100 dark:bg-amber-500 p-5">
        <TaskList tasks={filteredTasks} showActions={true}/>
      </div>
    </div>
  );
}

export default Home;
