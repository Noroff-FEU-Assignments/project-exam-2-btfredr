import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Contact = () => {
  const contactSchema = yup.object().shape({
    firstName: yup.string().required("Please enter your first name"),
    lastName: yup.string().required("Please enter your last name"),
    email: yup
      .string()
      .required("Please enter an email address")
      .email("Please enter a valid email address"),
    message: yup
      .string()
      .required("Please enter your message")
      .min(10, "Message must be more than 10 characters"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(contactSchema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);
  return (
    <>
      <Navigation />
      <div className="container">
        <Heading title="Want to get in contact with us?" />

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
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

          <button className="form__btn">Send</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
