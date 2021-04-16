import Navigation from "../components/Navigation";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <div className="home">
        <div className="home__background">
          <div className="home__box">
            <h1 className="home__title">
              Looking for a place to stay?
              <span className="home__bar"></span>
            </h1>
            <div className="home__text">
              <Paragraph content="High quality rooms starting at 399 NOK" />
            </div>

            <div>
              <Link to="/hotels" className="home__btn">
                View Hotels
              </Link>
            </div>
          </div>
        </div>
        <div className="home__featured">
          <div className="home__title2">
            <Heading title="Featured Rooms" />
            <span className="home__bar"></span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
