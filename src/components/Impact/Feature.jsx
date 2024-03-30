import { useState } from "react";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import styles from "./Feature.module.scss";

const Feature = ({ icon, number, text }) => {
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
        <img
          src={icon}
          alt={number + " " + text}
          className={styles["image"]}
        />
        {counterOn && (
          <h1 className={styles["number"]}>
            <CountUp
              start={0}
              end={number}
              duration={2}
              delay={0}
            />
          </h1>
        )}
        <p className={styles["text"]}>{text}</p>
      </div>
    </ScrollTrigger>
  );
};

export default Feature;
