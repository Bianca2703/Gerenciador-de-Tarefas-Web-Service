import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Completed from "./pages/Completed";
import About from "./pages/About";
import ProjectsDetails from "./pages/ProjectsDetails";
import Statistics from "./pages/Statistics";
import Edit from "./pages/Edit";
import EditProject from "./pages/EditProject";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectsDetails />} />
      <Route path="/completed" element={<Completed />} />
      <Route path="/about" element={<About />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="edit/:id" element={<Edit />} />
      <Route path="editProject/:id" element={<EditProject />} />
    </Routes>
  );
}

export default AppRoutes;
