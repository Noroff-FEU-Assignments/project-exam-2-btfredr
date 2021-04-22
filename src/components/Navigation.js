import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import AuthContext from "../context/AuthContext";

const Navigation = () => {
  const [auth, setAuth] = useContext(AuthContext);

  const history = useHistory();

  const logout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      setAuth(null);
      history.push("/");
    }
  };

  return (
    <Navbar className="nav" bg="light" variant="light" expand="lg">
      <Navbar.Brand href="/" className="nav__logo">
        Holidaze
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="nav__icon" id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav__link">
            Home
          </Link>
          <Link to="/hotels" className="nav__link">
            Hotels
          </Link>
          <Link to="/contact" className="nav__link">
            Contact
          </Link>
          {auth ? (
            <>
              <Link to="/enquiries" className="nav__link">
                Enquiries
              </Link>
              <Link to="/messages" className="nav__link">
                Messages
              </Link>
              <Link to="/add" className="nav__link">
                Add
              </Link>
              <Link to="/" onClick={logout} className="nav__login">
                Log out
              </Link>
            </>
          ) : (
            <Link to="/login" className="nav__login">
              Login
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
