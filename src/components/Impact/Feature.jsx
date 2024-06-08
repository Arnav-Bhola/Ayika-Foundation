import { useState } from "react";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import styles from "./Feature.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Feature = ({ icon, number, text, plus = false }) => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => {
        setCounterOn(true);
      }}
      onExit={() => {
        setCounterOn(false);
      }}
    >
      <div className={styles["container"]}>
        <FontAwesomeIcon
          icon={icon}
          className={styles["image"]}
        />
        {counterOn && (
          <h1 className={styles["number"]}>
            <CountUp
              start={0}
              end={number}
              duration={1}
              delay={0}
            />
            {plus && "+"}
          </h1>
        )}
        <p className={styles["text"]}>{text}</p>
      </div>
    </ScrollTrigger>
  );
};

export default Feature;
