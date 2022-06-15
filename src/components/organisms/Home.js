import Navbar from "./Navbar";
import Jumbotron from "../molecules/Jumbotron";
import AdvantageCardList from "./AdvantageCardList";

const Home = () => {
  return (
    <section className="min-h-screen  mb-36 lg:mb-0">
      <Navbar />
      <Jumbotron />
      <AdvantageCardList />
    </section>
  );
};

export default Home;
