import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">Holidaze</div>
      <ul className="nav__links">
        <Router>
          <Link to="/" className="nav__link">
            Home
          </Link>
          <Link to="/hotels" className="nav__link">
            Hotels
          </Link>
          <Link to="/contact" className="nav__link">
            Contact
          </Link>
        </Router>
      </ul>
      <Switch></Switch>
    </nav>
  );
};

export default Navbar;
