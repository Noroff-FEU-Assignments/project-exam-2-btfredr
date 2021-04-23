const SearchBar = ({ q, setQ, hotels }) => {
  const search = (hotels) => {
    return hotels.filter((hotel) => hotel.name.toLowerCase().indexOf(q) > -1);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Search Hotels..."
        className="searchBar"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
