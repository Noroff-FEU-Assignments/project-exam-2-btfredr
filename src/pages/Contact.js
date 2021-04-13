import Heading from "../components/Heading";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <Heading title="Want to get in contact with us?" />

        <form className="form">
          <label>First Name</label>
          <input
            type="string"
            name="firstName"
            placeholder="Enter your first name..."
          />

          <label>Last Name</label>
          <input
            type="string"
            name="lastName"
            placeholder="Enter your last name..."
          />

          <label>Email</label>
          <input type="string" name="email" placeholder="Enter your email..." />

          <label>Message</label>
          <textarea
            type="string"
            name="message"
            placeholder="Enter your message..."
          />

          <button className="form__btn">Send</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
