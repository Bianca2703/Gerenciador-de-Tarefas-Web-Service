import { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";
import TaskForm from "./components/TaskForm";
import Header from "./components/Header";
import ThemeProvider from "./Contexts/ThemeProvider";
import TaskList from "./components/TaskList";
import GlobalProvider from "./Contexts/GlobalProvider";
import StatusHeader from "./components/StatusHeader";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
//import Projects from "./pages/Projects";
//import Completed from "./pages/Completed";
import About from "./pages/About";

function App() {
  //const [tasks, setTasks] = useState([]);
  //text-gray-500 MUDAR A COR DA LETRA
  return (
    <ThemeProvider>
      <GlobalProvider>
        <div className="space-y-3 dark:bg-slate-900">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              {/*<Route path="/projects" element={<Projects />} />
              <Route path="/completed" element={<Completed />} />
              <Route path="/projects/:id" element={<Projects />} />
              */}
              <Route path="/about" element={<About />} />
            </Routes>
          </BrowserRouter>
        </div>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
