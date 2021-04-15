import Navigation from "../components/Navigation";
import Heading from "../components/Heading";
import Footer from "../components/Footer";

const Hotels = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <Heading title="Available listings" />
      </div>
      <Footer />
    </>
  );
};

export default Hotels;
