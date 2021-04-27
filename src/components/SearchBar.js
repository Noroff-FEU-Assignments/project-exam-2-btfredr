import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ options, prompt, value, onChange, label, id }) => {
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

  function filter(options) {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
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
            placeholder={prompt}
            onChange={(e) => {
              setQuery(e.target.value);
              onChange(null);
            }}
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
      </div>
      <div className={`searchBar__options ${open ? "open" : null}`}>
        {filter(options).map((option) => (
          <div
            key={option[id]}
            className={`searchBar__option ${
              value === option ? "selected" : null
            }`}
            onClick={() => {
              setQuery("");
              onChange(option);
              setOpen(false);
            }}
          >
            <Link key={option[id]} to={`/hotel/${option[id]}`}>
              {option[label]}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
