import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../utils/schemas";
import { BASE_URL } from "../utils/constants";

import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [hotel, setHotel] = useState(null);

  const productPath = BASE_URL + "/contacts/";

  const [submitting, setSubmitting] = useState(false);
  const [postError, setPostError] = useState(null);
  const [success, setSuccess] = useState(null);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    setPostError(null);
    console.log(data);
    try {
      const response = await axios.post(productPath, data);
      console.log(response);
      setHotel(response.data);
      setSuccess(true);
    } catch (error) {
      console.log("error", error);
      setPostError(error.toString());
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />
      <div className="container">
        <Heading title="Want to get in contact with us?" />
        {postError && <p>{postError}</p>}
        <form
          className="form"
          onSubmit={handleSubmit(onSubmit)}
          disabled={submitting}
        >
          <label>First Name</label>
          <input
            type="string"
            name="firstName"
            ref={register}
            placeholder="Enter your first name..."
          />
          {errors.firstName && (
            <span className="form__error">{errors.firstName.message}</span>
          )}
          <label>Last Name</label>
          <input
            type="string"
            name="lastName"
            ref={register}
            placeholder="Enter your last name..."
          />
          {errors.lastName && (
            <span className="form__error">{errors.lastName.message}</span>
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

          <label>Message</label>
          <textarea
            type="string"
            name="message"
            ref={register}
            placeholder="Enter your message..."
          />
          {errors.message && (
            <span className="form__error">{errors.message.message}</span>
          )}
          {success ? (
            <p className="form__success">
              Your message was submitted! Thank you for your time.
            </p>
          ) : null}
          <button type="submit" className="form__btn">
            {submitting ? "Sending ..." : "Send"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
