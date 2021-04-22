import { useState } from "react";

const SearchBar = ({ lang }) => {
  const [searchText, setSearchText] = useState("");
  const [suggest, setSuggest] = useState([]);
  const handleChange = (e) => {
    let searchval = e.target.value;
    let suggestion = [];
    if (searchval.length > 0) {
      suggestion = lang
        .sort()
        .filter((e) => e.toLowerCase().includes(searchval.toLowerCase()));
    }
    setSuggest(suggestion);
    setSearchText(searchval);
  };

  const getSuggestions = () => {
    if (suggest.length === 0 && searchText !== "") {
      return <p>Search content not found</p>;
    }
    return (
      <ul>
        {suggest.map((item, index) => {
          return (
            <div key={index}>
              <li>{item}</li>
              <hr />
            </div>
          );
        })}
      </ul>
    );
  };
  return (
    <>
      <input
        type="text"
        placeholder="Search Hotels..."
        className="searchBar"
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBar;
