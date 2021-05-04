import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { enquirySchema } from "../utils/schemas";

import Spinner from "../assets/Spinner.gif";

const Hotel = () => {
  const [hotel, setHotel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [submitting, setSubmitting] = useState(false);
  const [postError, setPostError] = useState(null);
  const [success, setSuccess] = useState(null);

  const enquiryPath = BASE_URL + "/enquiries";

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(enquirySchema),
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    setPostError(null);
    console.log(data);
    try {
      const response = await axios.post(enquiryPath, data);
      console.log(response);
      setSuccess(true);
    } catch (error) {
      console.log("error", error);
      setPostError(error.toString());
    } finally {
      setSubmitting(false);
    }
  };

  const { id } = useParams();

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
            <form className="bookingForm" onSubmit={handleSubmit(onSubmit)}>
              {postError && <p>{postError}</p>}
              <label>Name</label>
              <input
                type="string"
                name="Name"
                ref={register}
                placeholder="Enter your full name..."
              />
              {errors.Name && (
                <span className="form__error">{errors.Name.message}</span>
              )}

              <label>Email</label>
              <input
                type="string"
                name="email"
                ref={register}
                placeholder="Enter your email..."
              />
              {errors.email && (
                <span className="form__error">{errors.email.message}</span>
              )}
              <div className="hotel__dates">
                <div className="hotel__dateContainer">
                  <label>Check in</label>
                  <input type="date" name="startDate" ref={register} />
                  {errors.startDate && (
                    <span className="form__error">
                      {errors.startDate.message}
                    </span>
                  )}
                </div>
                <div className="hotel__dateContainer">
                  <label>Check out</label>
                  <input type="date" name="endDate" ref={register} />
                  {errors.endDate && (
                    <span className="form__error">
                      {errors.endDate.message}
                    </span>
                  )}
                </div>
              </div>
              <label>Guests</label>
              <select name="capacity" ref={register}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              {errors.capacity && (
                <span className="form__error">{errors.capacity.message}</span>
              )}
              {success ? (
                <p className="form__success">Your booking was confirmed</p>
              ) : null}
              <button type="submit" className="form__btn">
                {submitting ? "Booking ..." : "Book"}
              </button>
              <label>Price</label>
              <p>{hotel.price} NOK x 7 nights</p>
              <label>Cleaning and service fees</label>

              <label>Total</label>
              <p>
                Total: ({hotel.startDate} + {hotel.endDate} * {hotel.price})
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hotel;
