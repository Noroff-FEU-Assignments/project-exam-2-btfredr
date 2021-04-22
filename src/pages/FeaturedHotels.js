import { useEffect, useState } from "react";
import axios from "axios";

import FeaturedGrid from "../components/content/FeaturedGrid";

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
  return (
    <>
      <div className="container">
        <FeaturedGrid isLoading={isLoading} hotels={hotels} />
      </div>
    </>
  );
};

export default FeaturedHotels;