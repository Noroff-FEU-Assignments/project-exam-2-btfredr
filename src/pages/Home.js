import Navigation from "../components/Navigation";
import background from "../assets/background.jpg";

const Home = () => {
  return (
    <div className="home">
      <Navigation />

      <div className="home__container">
        <img src={background}></img>
        <div className="home__box">
          <h1>Looking for a place to stay in Bergen?</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
