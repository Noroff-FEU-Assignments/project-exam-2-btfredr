const ContentItem = ({ hotel }) => {
  return (
    <>
      <div className="listing">
        <img src={hotel.image_url} alt="gis" />
        <div className="listing__content">
          <h2>{hotel.name}</h2>
          <p>{hotel.slug}</p>
        </div>
      </div>
    </>
  );
};

export default ContentItem;
