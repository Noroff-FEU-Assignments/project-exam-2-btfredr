import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../utils/schemas";
import { BASE_URL } from "../utils/constants";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../utils/useAxios";

const Contact = () => {
  const [message, setMessage] = useState(null);
  const { id } = useParams();
  const http = useAxios();

  const messagePath = BASE_URL + "/contacts";

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
      const response = await http.post(messagePath, data);
      console.log(response);
      setMessage(response.data);
      setSuccess(true);
    } catch (error) {
      console.log("error", error);
      setPostError(error.toString());
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const getMessage = async () => {
      try {
        const response = await http.get(`${messagePath}/${id}`);
        console.log(response);
        setMessage(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessage();
  }, [id]);

  console.log(errors);
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

          <button type="submit" className="form__btn">
            {submitting ? "Sending ..." : "Send"}
          </button>
        </form>
        {success ? (
          <p>{message.firstName}, your message was submitted!</p>
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default Contact;
