import Navigation from "../components/Navigation";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

import ContentGrid from "../components/content/ContentGrid";

const FeaturedHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      const result = await axios(
        "https://ancient-beach-84390.herokuapp.com/hotels"
      );

      setHotels(result.data);
      console.log(result.data);
      setIsLoading(false);
    };
    fetchHotels();
  }, []);
  return <div className="container"></div>;
};

export default FeaturedHotels;
