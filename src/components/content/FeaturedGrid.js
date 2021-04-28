import FeaturedItem from "./FeaturedItem";
import SpinnerWhite from "../../assets/SpinnerWhite.gif";

const FeaturedGrid = ({ hotels, isLoading }) => {
  const featuredHotel = hotels.filter((hotel) => hotel.featured);
  return isLoading ? (
    <img src={SpinnerWhite} alt="Loading" className="loading" />
  ) : (
    <section className="featuredListings">
      {featuredHotel.map((hotel) => (
        <FeaturedItem key={hotel.id} hotel={hotel}></FeaturedItem>
      ))}
    </section>
  );
};

export default FeaturedGrid;
