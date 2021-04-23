import Navigation from "../components/Navigation";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

import ContentGrid from "../components/content/ContentGrid";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [q, setQ] = useState("");

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

  const search = (hotels) => {
    return hotels.filter((hotel) => hotel.name.toLowerCase().indexOf(q) > -1);
  };
  return (
    <>
      <Navigation />
      <div className="container">
        <Heading title="Available listings" />
        <input
          type="text"
          placeholder="Search Hotels..."
          className="searchBar"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <ContentGrid isLoading={isLoading} hotels={search(hotels)} />
      </div>
      <Footer />
    </>
  );
};

export default Hotels;
