import styles from "./Gallery.module.scss";

import GALLERY_CONTENT from "../data/Gallery.json";

const Gallery = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <h1>our gallery</h1>
      </div>
      <div className={styles["grid"]}>
        {GALLERY_CONTENT.map((i, index) => {
          let classes = styles["image"];

          return (
            <a
              href={i.link}
              key={index}
              className={styles["gallery-object"]}
            >
              <img
                className={classes}
                src={`Images/Gallery/${i.orientation}/${i.project}/` + i.src}
                alt={i.alt}
              ></img>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
