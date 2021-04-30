import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";

import EnquiryGrid from "../components/content/EnquiryGrid";

const Enquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEnquiries = async () => {
      const result = await axios(
        "https://ancient-beach-84390.herokuapp.com/enquiries"
      );

      setEnquiries(result.data);
      console.log(result.data);
      setIsLoading(false);
    };
    fetchEnquiries();
  }, []);
  return (
    <>
      <Navigation />
      <div className="container">
        <Heading title="Enquiries" />

        <EnquiryGrid isLoading={isLoading} enquiries={enquiries} />
      </div>
      <Footer />
    </>
  );
};

export default Enquiries;
