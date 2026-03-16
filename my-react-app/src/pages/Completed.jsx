import { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";
import TaskList from "../components/TaskList";

function Completed() {
  const { tasks } = useContext(GlobalContext);

  const filteredTasks = tasks.filter(
    (task) => task.isCompleted && !task.projectId,
  );

  return (
    <div className="flex flex-col p-6 space-y-4 shadow dark:bg-slate-800">
      <h1>Tarefas concluídas</h1>
      <TaskList tasks={filteredTasks} showActions={false} />
    </div>
  );
}

export default Completed;
