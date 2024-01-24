import { useState } from "react";

import styles from "./RecognitionCarousel.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import IMAGES from "../../data/Recognitions.json";

const next = (key) => {
  if (key === IMAGES.length) {
    return 1;
  } else {
    return key + 1;
  }
};

const previous = (key) => {
  if (key === 1) {
    return IMAGES.length;
  } else {
    return key - 1;
  }
};

const RecognitionCarousel = () => {
  const [currentId, setCurrentId] = useState(1);

  return (
    <div className={styles["container"]}>
      <div className={styles["photos"]}>
        {IMAGES.map((i, index) => {
          return (
            <img
              src={"Images/Recognitions/" + i.src}
              alt={i.alt}
              key={index}
              className={
                currentId === i.key
                  ? styles["image-shown"]
                  : currentId === next(i.key)
                  ? styles["image-previous"]
                  : currentId === previous(i.key)
                  ? styles["image-next"]
                  : styles["image-hidden"]
              }
            />
          );
        })}
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          if (currentId === IMAGES.length) {
            setCurrentId(1);
          } else {
            setCurrentId(currentId + 1);
          }
          return;
        }}
        className={styles["right"]}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          if (currentId === 1) {
            setCurrentId(IMAGES.length);
          } else {
            setCurrentId(currentId - 1);
          }
          return;
        }}
        className={styles["left"]}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    </div>
  );
};

export default RecognitionCarousel;
