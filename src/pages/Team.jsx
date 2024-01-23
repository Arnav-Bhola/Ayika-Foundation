import styles from "./Team.module.scss";

import data from "../data/Team.json";

import achintya from "../assets/images/Team/achintya.jpg";

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
                src={achintya}
                alt='achintya'
                loading='lazy'
                className={styles["founders-picture"] + " " + styles["arnav-pic"]}
              />
            </picture>
          </div>
          <div className={styles["founders-content"]}>
            <h3 className={styles["founders-position"]}>Co-Founder</h3>
            <h2 className={styles["founders-name"]}>Litisha Bagadia</h2>
            <p className={styles["founders-desc"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui. In cursus
              turpis massa tincidunt dui ut ornare lectus. Sit amet aliquam id diam maecenas. Sem
              viverra aliquet eget sit amet tellus. Tincidunt praesent semper feugiat nibh sed
              pulvinar proin gravida. Enim sit amet venenatis urna cursus eget. Egestas quis ipsum
              suspendisse ultrices gravida dictum fusce ut. Arcu dui vivamus arcu felis bibendum ut
              tristique.
            </p>
          </div>
        </div>
        <div className={styles["founders-frame"] + " " + styles["second-founder"]}>
          <div className={styles["founders-picture-container"]}>
            <picture>
              <img
                src={achintya}
                alt='arnav'
                loading='lazy'
                className={styles["founders-picture"]}
              />
            </picture>
          </div>
          <div className={styles["founders-content"]}>
            <h3 className={styles["founders-position"]}>Co-Founder</h3>
            <h2 className={styles["founders-name"]}>Siya Joshi</h2>
            <p className={styles["founders-desc"]}>
              Ultricies integer quis auctor elit sed. Nullam ac tortor vitae purus faucibus ornare
              suspendisse. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Vitae proin
              sagittis nisl rhoncus mattis rhoncus urna neque viverra. Egestas sed sed risus pretium
              quam. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Et egestas quis
              ipsum suspendisse. Adipiscing elit ut aliquam purus sit amet luctus venenatis. In
              mollis nunc sed id. Dui id ornare arcu odio. Sed felis eget velit aliquet sagittis id
              consectetur.
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
                  src={"Team/" + member.image + ".jpg"}
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
