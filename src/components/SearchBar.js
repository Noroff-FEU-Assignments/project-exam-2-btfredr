import { useState } from "react";

const SearchBar = (options) => {
  const [searchText, setSearchText] = useState("");
  const [suggest, setSuggest] = useState([]);
  const handleChange = (e) => {
    let searchValue = e.target.value;
    setSearchText(searchValue);
    let suggestion = [];
    if (searchValue.length > 0) {
      suggestion = options.filter((e) =>
        e.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    console.log(suggestion);
    console.log(searchValue);
  };
  return (
    <>
      <input
        type="text"
        className="searchBar"
        placeholder="Search Hotels..."
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBar;
