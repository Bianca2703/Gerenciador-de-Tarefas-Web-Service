import "./App.css";
import Header from "./components/Header";
import ThemeProvider from "./Contexts/ThemeProvider";
import GlobalProvider from "./Contexts/GlobalProvider";
import { BrowserRouter } from "react-router-dom";
//import Projects from "./pages/Projects";
//import Completed from "./pages/Completed";
import AppRoutes from "./Routes";

function App() {
  //const [tasks, setTasks] = useState([]);
  //text-gray-500 MUDAR A COR DA LETRA
  return (
    <ThemeProvider>
      <GlobalProvider>
        <div className="space-y-3 dark:bg-slate-900">
          <BrowserRouter>
            <Header />
            <AppRoutes />
          </BrowserRouter>
        </div>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
