const ContentItem = ({ hotel }) => {
  return (
    <>
      <div className="listing">
        <img src={hotel.image_url} alt={hotel.name} />
        <div className="listing__content">
          <a key={hotel.slug} href={`/hotel/${hotel.id}`}>
            {hotel.name}
          </a>
          <p>{hotel.slug}</p>
        </div>
      </div>
    </>
  );
};

export default ContentItem;
