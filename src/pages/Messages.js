import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { CONTACT_PATH } from "../utils/constants";

import MessageGrid from "../components/content/MessageGrid";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      const result = await axios(CONTACT_PATH);

      setMessages(result.data);
      setIsLoading(false);
    };
    fetchMessages();
  }, []);
  return (
    <>
      <Navigation />
      <div className="container">
        <Heading title="Messages" />
        <MessageGrid isLoading={isLoading} messages={messages} />
      </div>
      <Footer />
    </>
  );
};

export default Messages;
