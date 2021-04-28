import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ hotels, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const close = (e) => {
    setOpen(e && e.target === ref.current);
  };

  function filter(hotels) {
    return hotels.filter((hotel) =>
      hotel.name.toLowerCase().startsWith(query.toLowerCase())
    );
  }

  return (
    <div className="searchBar__dropdown">
      <div
        className="searchBar__control"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="searchBar__selected-value">
          <input
            className="searchBar"
            type="text"
            ref={ref}
            placeholder="Search Hotels..."
            onChange={(e) => {
              setQuery(e.target.value);
              onChange(null);
            }}
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
      </div>
      <div className={`searchBar__options ${open ? "open" : null}`}>
        {filter(hotels).map((hotel) => (
          <div
            key={hotel.id}
            className={`searchBar__option ${
              value === hotel ? "selected" : null
            }`}
            onClick={() => {
              setQuery("");
              onChange(hotel);
              setOpen(false);
            }}
          >
            <Link key={hotel.id} to={`/hotel/${hotel.id}`}>
              {hotel.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
