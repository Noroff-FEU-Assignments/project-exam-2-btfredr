import Navigation from "../components/Navigation";
import Paragraph from "../components/Paragraph";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <div className="home">
        <div className="home__background"></div>
        <div className="home__featured"></div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
