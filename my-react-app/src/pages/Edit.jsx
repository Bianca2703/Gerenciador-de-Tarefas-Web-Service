import { useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";

function Edit() {
  const { id } = useParams();

  return <TaskForm mode="edit" taskId={id} />;
}

export default Edit;
