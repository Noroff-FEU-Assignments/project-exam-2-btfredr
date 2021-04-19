import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Hotel = () => {
  const [hotel, setHotel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useHistory();

  const { id } = useParams();

  if (!id) {
    history.push("/");
  }

  const url = BASE_URL + "/hotels/" + id;

  useEffect(
    function () {
      async function fetchHotel() {
        try {
          const response = await fetch(url);
          console.log(response);

          if (response.ok) {
            const json = await response.json();
            setHotel(json);
          } else {
            setError("An error occurred");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setIsLoading(false);
        }
      }
      fetchHotel();
    },
    [url]
  );

  if (isLoading) {
    return <h1>Loading Hotel...</h1>;
  }

  if (error) {
    return <div>An error occurred: {error}</div>;
  }

  return (
    <>
      <Navigation />
      <div className="container">
        <Heading title={hotel.name} />
        <div className="imageContainer">
          <img src={hotel.image_url} />
        </div>
        <div>
          <Paragraph content={hotel.description} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hotel;
