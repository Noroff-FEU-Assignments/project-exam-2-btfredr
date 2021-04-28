import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import Spinner from "../assets/Spinner.gif";

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
    return <img src={Spinner} alt="Loading" className="loading" />;
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
          <div className="hotelImage">
            <img src={hotel.image_url} alt={hotel.name} />
          </div>
        </div>
        <div className="hotel">
          <div className="hotel__left">
            <h2>{hotel.Heading}</h2>
            <Paragraph content={hotel.description} />
          </div>
          <div className="hotel__right">
            <div className="bookingForm">
              <label>Check in:</label>
              <input type="date" />
              <label>Check out:</label>
              <input type="date" />
              <button className="form__btn">Book</button>
              <label>Price</label>
              <p>{hotel.price} NOK x 7 nights</p>
              <label>Fees</label>
              <p>Cleaning and service fees 250 kr</p>
              <label>Total</label>
              <p>Total: 3043 kr</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hotel;
