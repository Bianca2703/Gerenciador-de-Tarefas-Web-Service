import { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="flex flex-col p-6 space-y-4 shadow">
      <h1 className="text-2xl">Gerenciador de Tarefas</h1>
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <div className="bg-amber-100 p-5">
        <TaskItem tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
