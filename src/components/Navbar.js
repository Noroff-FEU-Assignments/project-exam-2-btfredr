import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">Holidaze</div>

      <ul className="nav__links">
        <Link to="/" className="nav__link">
          Home
        </Link>
        <Link to="/hotels" className="nav__link">
          Hotels
        </Link>
        <Link to="/contact" className="nav__link">
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
