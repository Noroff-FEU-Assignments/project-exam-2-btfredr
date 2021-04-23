import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import axios from "axios";
import { useState, useEffect } from "react";

import MessageGrid from "../components/content/MessageGrid";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      const result = await axios(
        "https://ancient-beach-84390.herokuapp.com/messages"
      );

      setMessages(result.data);
      console.log(result.data);
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
    </>
  );
};

export default Messages;
