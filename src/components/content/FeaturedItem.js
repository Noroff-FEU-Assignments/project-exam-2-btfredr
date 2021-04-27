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
        </div>
      </div>
    </>
  );
};

export default FeaturedItem;
