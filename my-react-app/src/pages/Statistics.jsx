import { useContext } from "react";
import withPremiumAccess from "../hoc/withPremiumAccess";
import { GlobalContext } from "../Contexts/GlobalContext";

function Statistics() {
  const { tasks } = useContext(GlobalContext);

  return (
    <div className=" p-6">
      <h1>Estatistica</h1>
      <h2>Quantas tarefas fiz essa semana?</h2>
    </div>
  );
}

export default withPremiumAccess(Statistics);
