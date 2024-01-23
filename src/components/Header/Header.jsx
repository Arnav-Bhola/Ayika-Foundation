import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["heading"]}>Ayika Foundation</h1>
      <h2 className={styles["subheading"]}>The ecological revolution</h2>
    </div>
  );
};

export default Header;
