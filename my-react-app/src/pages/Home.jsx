import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Home() {
  return (
    <div className="flex flex-col p-6 space-y-4 shadow dark:bg-slate-800">
      <h1 className="text-2xl dark:text-white">Gerenciador de Tarefas</h1>
      <TaskForm />
      <div className="bg-amber-100 dark:bg-amber-500 p-5">
        <TaskList />
      </div>
    </div>
  );
}

export default Home;
