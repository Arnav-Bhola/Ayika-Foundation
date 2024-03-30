import { useState, useEffect } from "react";

import styles from "./Header.module.scss";

import IMAGES from "../../data/Header.json";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles["background"]}>
        <img
          src={"Images/Header/" + IMAGES[currentIndex].src}
          alt={IMAGES[currentIndex].alt}
        />
      </div>
      <div className={styles["container"]}>
        <h1 className={styles["heading"]}>Ayika Foundation</h1>
        <h2 className={styles["subheading"]}>The ecological revolution</h2>
      </div>
    </>
  );
};

export default Header;
