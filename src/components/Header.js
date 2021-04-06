import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__logo">Holidaze</h1>
      <div className="header__search">
        <input type="text"></input>
        <button>Search</button>
      </div>
      <div className="header__login">
        <button>Login</button>
      </div>
    </div>
  );
};

export default Header;
