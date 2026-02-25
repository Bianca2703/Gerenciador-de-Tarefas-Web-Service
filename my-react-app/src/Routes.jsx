import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
//import Completed from "./pages/Completed";
import About from "./pages/About";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<Projects />} />
      {/*
              <Route path="/completed" element={<Completed />} />
              
              */}
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default AppRoutes;
