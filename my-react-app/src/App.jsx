import { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";
import TaskForm from "./components/TaskForm";
import Header from "./components/Header";
import ThemeProvider from "./components/Contexts/ThemeProvider";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  //text-gray-500 MUDAR A COR DA LETRA
  return (
    <ThemeProvider>
      <div className="space-y-3 dark:bg-slate-900">
        <Header />
        <div className="flex flex-col p-6 space-y-4 shadow dark:bg-slate-800">
          <h1 className="text-2xl dark:text-white">Gerenciador de Tarefas</h1>
          <TaskForm tasks={tasks} setTasks={setTasks} />
          <div className="bg-amber-100 dark:bg-amber-500 p-5">
            <TaskList tasks={tasks} setTasks={setTasks} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
