import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

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
          <Nav.Link href="/" className="nav__link">
            Home
          </Nav.Link>
          <Nav.Link href="/hotels" className="nav__link">
            Hotels
          </Nav.Link>
          <Nav.Link href="/contact" className="nav__link">
            Contact
          </Nav.Link>
          {auth ? (
            <>
              <button onClick={logout} className="logout nav-item">
                Log out
              </button>
            </>
          ) : (
            <Nav.Link href="/login" className="nav__login">
              Login
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
