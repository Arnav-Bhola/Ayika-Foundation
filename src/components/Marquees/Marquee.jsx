import styles from "./Marquee.module.scss";

const Marquee = ({ rank }) => {
  let direction;

  if (rank === 1) {
    direction = "right";
  } else {
    direction = "left";
  }

  return (
    <div className={styles["container"]}>
      <marquee
        direction={direction}
        className={styles[rank === 1 ? "filled" : "transparent"]}
      >
        Let&apos;s make the world a better place
      </marquee>
    </div>
  );
};

export default Marquee;
