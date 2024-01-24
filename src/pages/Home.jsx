import styles from "./Home.module.scss";

import Header from "../components/Header/Header";
import Information from "../components/Information/Information";
import Impact from "../components/Impact/Impact";
import Marquee from "../components/Marquees/Marquee";
import Recognition from "../components/Recognition/Recognition";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Information />
      <Impact />
      <Recognition />
      <div className={styles["marquees"]}>
        <Marquee rank={1} />
        <Marquee rank={2} />
      </div>
    </div>
  );
};

export default HomePage;
