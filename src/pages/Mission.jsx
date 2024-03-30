import React from "react";

import styles from "./Mission.module.scss";

const Mission = () => {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["heading"]}>Our Story</h1>
      <p className={styles["text"]}>
        Siya and Litisha hail from Mumbai–a city with a population of more than 20 million people.
        Such a huge population signals an environmental hazard as well: deforestation to set up
        buildings, vehicular pollution, and improper waste management system. Both of them saw heaps
        of waste accumulated in their surroundings every day while going to school, and they wanted
        to make a change. The change could be made by targeting the root cause, and that can be
        brought about by awareness itself. They saw that people did not care about their
        environment, and through Ayika, what we want to do is make people mindful of the environment
        and protect the Earth, which is the simplest solution to the climatic hazards the planet is
        facing. Hence, Siya and Litisha started Ayika Foundation, an initiative to target a large
        audience and invest youth energy in this process.
      </p>
    </div>
  );
};

export default Mission;
