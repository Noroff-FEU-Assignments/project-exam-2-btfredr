import ContentItem from "./ContentItem";

const ContentGrid = ({ hotels, isLoading }) => {
  return isLoading ? (
    <h1>Please wait... Content is loading</h1>
  ) : (
    <section className="listings">
      {hotels.map((hotel) => (
        <ContentItem key={hotel.slug} hotel={hotel}></ContentItem>
      ))}
    </section>
  );
};

export default ContentGrid;
