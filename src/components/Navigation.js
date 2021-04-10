import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
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
          <Nav.Link href="/login" className="nav__login">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
