import { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";

function StatusHeader() {
  const { tasks } = useContext(GlobalContext);

  const outstanding = tasks.filter((task) => task.isCompleted === false).length;

  return <p>Você tem {outstanding} tarefas pendentes </p>;
}

export default StatusHeader;
