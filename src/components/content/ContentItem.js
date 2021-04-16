const ContentItem = ({ hotel }) => {
  return (
    <>
      <div className="listing">
        <img src={hotel.image_url} alt="gis" />
        <div className="listing__content">
          <h2>{hotel.name}</h2>
        </div>
      </div>
    </>
  );
};

export default ContentItem;
