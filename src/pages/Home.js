import Navigation from "../components/Navigation";
import background from "../assets/background.jpg";
import Paragraph from "../components/Paragraph";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Navigation />

      <div className="home__container">
        <img src={background} alt="Hotel"></img>

        <div className="home__box">
          <h1 className="home__title">
            Looking for a place to stay in Bergen?
          </h1>
          <span className="home__bar"></span>
          <div className="home__text">
            <Paragraph content="High quality rooms starting at 399 kr" />
          </div>

          <div>
            <Link to="/hotels" className="home__btn">
              View Hotels
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
