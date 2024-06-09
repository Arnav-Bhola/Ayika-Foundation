import styles from "./Team.module.scss";

import data from "../data/Team.json";

import siya from "../assets/images/Team/Siya_Joshi.png";
import litisha from "../assets/images/Team/Litisha_Bagadia.png";

const TeamPage = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <h1>our team</h1>
      </div>
      <div className={styles["founders-container"]}>
        <div className={styles["founders-frame"]}>
          <div className={styles["founders-picture-container"]}>
            <picture>
              <img
                src={litisha}
                alt='Litisha'
                loading='lazy'
                className={styles["founders-picture"]}
              />
            </picture>
          </div>
          <div className={styles["founders-content"]}>
            <h3 className={styles["founders-position"]}>Co-Founder</h3>
            <h2 className={styles["founders-name"]}>Litisha Bagadia</h2>
            <p className={styles["founders-desc"]}>
              Litisha Bagadia is a high school graduate from Mumbai, India. She is deeply interested
              in psychology, education, business, and climate action. She spoke about her journey at
              Ayika as a TEDx speaker and loves being on stage. In her free time, she likes
              exploring new cafés in Mumbai, baking, and has a newfound love for photography!
              Through Ayika, Litisha hopes to create a chain of youth climate action changemakers
              globally who spread effective sustainability education!
            </p>
          </div>
        </div>
        <div className={styles["founders-frame"] + " " + styles["second-founder"]}>
          <div className={styles["founders-picture-container"]}>
            <picture>
              <img
                src={siya}
                alt='Siyaa'
                loading='lazy'
                className={styles["founders-picture"]}
              />
            </picture>
          </div>
          <div className={styles["founders-content"]}>
            <h3 className={styles["founders-position"]}>Co-Founder</h3>
            <h2 className={styles["founders-name"]}>Siya Joshi</h2>
            <p className={styles["founders-desc"]}>
              Siya Joshi, co-founder of Ayika Foundation, is a student from Mumbai, India. Her
              optimism and her search for hope in all areas of her life inspired her to start the
              Ayika Foundation. She wants to finish her undergraduate studies in
              sustainability-infused design. As a mentor to many students, her goal is to inspire
              young people to become activists for the welfare of animals and the environment. She
              spends much of her time ideating projects for Ayika along with her team, looking after
              stray animals, designing and working on art projects.
            </p>
          </div>
        </div>
      </div>
      <div className={styles["team"]}>
        {data.map((member, index) => (
          <div
            className={styles["member"]}
            key={index}
          >
            <div className={styles["members-picture-container"]}>
              <picture>
                <img
                  src={"Images/Team/" + member.image}
                  alt={member.name}
                  loading='lazy'
                  className={styles["members-picture"]}
                />
              </picture>
            </div>
            <h4 className={styles["members-position"]}>{member.position}</h4>
            <h3 className={styles["members-name"]}>{member.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
