import Navbar from "./Navbar";
import Jumbotron from "../molecules/Jumbotron";
import AdvantageCardList from "./AdvantageCardList";

const Home = () => {
  return (
    <section className="min-h-screen">
      <Navbar />
      <Jumbotron />
      <AdvantageCardList />
    </section>
  );
};

export default Home;
