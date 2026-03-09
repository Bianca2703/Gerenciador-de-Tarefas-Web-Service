import { useParams } from "react-router-dom";
import ProjectForm from "../components/ProjectForm";

function Edit() {
  const { id } = useParams();

  return <ProjectForm mode="edit" projectId={id} />;
}

export default Edit;
