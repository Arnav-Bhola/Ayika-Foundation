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
      <Recognition />
      <Impact />
      <div>
        <Marquee rank={1} />
        <Marquee rank={2} />
      </div>
    </div>
  );
};

export default HomePage;
