import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Hi {id}</h1>
    </div>
  );
};

export default ProjectDetail;
