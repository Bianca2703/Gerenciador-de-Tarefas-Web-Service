import { useParams } from "react-router-dom";
import ProjectForm from "../components/ProjectForm";

function EditProject() {
  const { id } = useParams();

  return <ProjectForm mode="edit" projectId={id} />;
}

export default EditProject;
