import { useContext } from "react";
import withPremiumAccess from "../hoc/withPremiumAccess";
import { GlobalContext } from "../Contexts/GlobalContext";

function Statistics() {
  const { tasks } = useContext(GlobalContext);

  const today = new Date(); //cria uma data baseada em hoje
  const startWeek = new Date();
  startWeek.setDate(today.getDate() - today.getDay()); //getday descobre em que dia da semana está
  //setday volta os dias necessarios ate o inicio da semana
  startWeek.setHours(0, 0, 0, 0); //zera o horário para evitar comparação

  const taskThisWeek = tasks.filter(
    (task) => task.completedAt && task.completedAt >= startWeek,
  );

  return (
    <div className=" p-6">
      <h1>Estatistica</h1>
      <h2>Quantas tarefas fiz essa semana?</h2>
      <p>{taskThisWeek.length} tarefas concluídas nesta semana</p>
    </div>
  );
}

export default withPremiumAccess(Statistics);
