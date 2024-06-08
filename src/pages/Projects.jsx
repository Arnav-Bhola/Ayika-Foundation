import styles from "./Projects.module.scss";

import Project from "../components/Projects/Project";

import Projects from "../data/Projects.json";

const ProjectsPage = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["text"]}>
        <h1 className={styles["heading"]}>Our Projects!</h1>
        <p className={styles["paragraph"]}>
          Over the last three years, we have worked tirelessly to ideate, implement, reflect, and
          re-ideate to host projects which lie at the heart of our mission–to combine purpose with
          fun. All our projects, regardless of what work they require, include an educational
          component to ensure people are aware of the simple steps they can take to make a
          difference. Our projects include a broad range of activities, all targetted towards some
          or the other facet concerning the environment or animals.r
        </p>
      </div>
      <div className={styles["quizzes"]}>
        {Projects.map((i, index) => {
          return (
            <Project
              key={index}
              heading={i.heading}
              details={i.details}
              link={i.link}
              image={"Images/Projects/" + i.imagename}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
