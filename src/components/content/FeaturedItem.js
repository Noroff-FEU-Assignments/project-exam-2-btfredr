import { Link } from "react-router-dom";

const FeaturedItem = ({ hotel }) => {
  return (
    <>
      <div className="featuredListing">
        <img src={hotel.image_url} alt={hotel.name} />
        <div className="featuredListing__content">
          <a key={hotel.id} href={`/hotel/${hotel.id}`}>
            {hotel.name}
          </a>
          <p>
            <strong>{hotel.price} NOK</strong>
          </p>
          <Link to={`/hotel/${hotel.id}`} className="listing__btn">
            View More
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeaturedItem;
