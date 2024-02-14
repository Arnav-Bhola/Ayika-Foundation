import styles from "./Projects.module.scss";

import Project from "../components/Projects/Project";

import rect1 from "../../public/Images/Projects/rect.png";
import rect2 from "../../public/Images/Projects/rect2.png";
import rect3 from "../../public/Images/Projects/rect3.png";
import rect4 from "../../public/Images/Projects/rect4.png";
import rect5 from "../../public/Images/Projects/rect5.png";

const ProjectsPage = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["text"]}>
        <h1 className={styles["heading"]}>Our Projects!</h1>
        <p className={styles["paragraph"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus esse ad ipsa dicta
          hic molestiae, labore natus aperiam illo quas, est iste laudantium eveniet. Quis rerum
          voluptatibus ipsam natus laborum.
        </p>
      </div>
      <div className={styles["quizzes"]}>
        <Project
          heading='Geography'
          details='labore natus aperiam illo quas, est iste laudantium eveniet.'
          link='https://www.google.com'
          image={rect1}
        />
        <Project
          heading='Urban Cities'
          details='Quis rerum voluptatibus ipsam natus laborum.'
          link='https://www.google.com'
          image={rect2}
        />
        <Project
          heading='Culture'
          details='iste laudantium eveniet. Quis rerum voluptatibus ipsam natus '
          link='https://www.google.com'
          image={rect3}
        />
        <Project
          heading='Food'
          details='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          link='https://www.google.com'
          image={rect4}
        />
        <Project
          heading='Language'
          details='est iste laudantium eveniet. Quis rerum voluptatibus ipsam natus laborum.'
          link='https://www.google.com'
          image={rect5}
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
