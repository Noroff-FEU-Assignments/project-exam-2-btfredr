import { useState } from "react";

const SearchBar = (props) => {
  const { onSearch } = props;

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const text = e.target.value;
    setSearch(text);
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(search);
    }
  };

  return (
    <>
      <input
        className="searchBar"
        onChange={handleSearch}
        onKeyPress={handleEnterKeyPress}
        value={search}
        type="text"
        placeholder="Search hotels..."
      />
    </>
  );
};

export default SearchBar;
