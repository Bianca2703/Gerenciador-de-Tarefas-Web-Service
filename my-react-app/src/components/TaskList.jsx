import TaskItem from "./TaskItem";

function TaskList({tasks, showActions}) { //recebe a lista filtrada de cada componente que renderiza taskList
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} showActions={showActions}/>
      ))}
    </ul>
  );
}
export default TaskList;
