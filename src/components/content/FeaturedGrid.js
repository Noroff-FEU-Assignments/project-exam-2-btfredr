import FeaturedItem from "./FeaturedItem";
import SpinnerWhite from "../../assets/SpinnerWhite.gif";

const FeaturedGrid = ({ hotels, isLoading }) => {
  const featuredHotel = hotels.filter((hotel) => hotel.featured);
  return isLoading ? (
    <h1>Please wait... Content is loading</h1>
  ) : (
    <section className="featuredListings">
      {featuredHotel.map((hotel) => (
        <FeaturedItem key={hotel.id} hotel={hotel}></FeaturedItem>
      ))}
    </section>
  );
};

export default FeaturedGrid;
