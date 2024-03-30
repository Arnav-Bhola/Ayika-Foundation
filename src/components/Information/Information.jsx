import styles from "./Information.module.scss";

import InformationSide from "./InformationSide";

const Information = () => {
  return (
    <div className={styles["container"]}>
      <InformationSide
        header={"who we are"}
        content={
          "We are a group of young activists who wish to create a difference in the society by doing all that we can. Climate action and animal welfare are two issues that are matter to us the most, and therefore, we work to create awareness about climate action through our events. Our mission aims at making the Earth green for the next generations to thrive on and to provide animals a safer home and proper care."
        }
      />
      <InformationSide
        header={"what we do"}
        content={
          "Ayika Foundation works towards creating a sustainable future for humans and animals alike by conducting various projects, drives, campaigns, spreading awareness, writing blogs, and hosting podcasts. We wish to transform the way people think about waste management, and promote animal protection. We recently conducted a public park cleanup and recycling campaign."
        }
        filled
      />
    </div>
  );
};

export default Information;
