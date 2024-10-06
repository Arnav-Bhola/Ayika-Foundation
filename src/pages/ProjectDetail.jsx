import { useParams } from "react-router-dom";

import Projects from "../data/Projects.json";

import styles from "./ProjectDetail.module.scss";

const ProjectDetail = () => {
  const { id } = useParams();

  const project = Projects.find((proj) => proj.id === id);

  if (!project) {
    return (
      <div className={styles["not-found"]}>
        <h1>Project Not Found</h1>
        <p>The project you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["text"]}>
        <h1 className={styles["heading"]}>{project.heading}</h1>
        <p className={styles["paragraph"]}>{project.description}</p>
      </div>
      {project.one.trim().length > 0 && (
        <section className={styles["detail"]}>
          <img
            alt={project.heading}
            src={"/Images/Projects/Details/" + project.ione}
          />
          <p>{project.one}</p>
        </section>
      )}
      {project.two.trim().length > 0 && (
        <section className={styles["detail"] + " " + styles["flip"]}>
          <img
            alt={project.heading}
            src={"/Images/Projects/Details/" + project.itwo}
          />
          <p>{project.two}</p>
        </section>
      )}
      {project.three.trim().length > 0 && (
        <section className={styles["detail"]}>
          <img
            alt={project.heading}
            src={"/Images/Projects/Details/" + project.ithree}
          />
          <p>{project.three}</p>
        </section>
      )}
      {project.four.trim().length > 0 && (
        <section className={styles["detail"] + " " + styles["flip"]}>
          <img
            alt={project.heading}
            src={"/Images/Projects/Details/" + project.ifour}
          />
          <p>{project.four}</p>
        </section>
      )}
    </div>
  );
};

export default ProjectDetail;
