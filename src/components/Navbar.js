import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <nav className="nav">
      <Link to="/" className="nav__logo">
        Holidaze
      </Link>

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
        <Link to="/login" className="nav__login">
          Login
        </Link>
      </ul>

      <button className="nav__mobile">
        {mobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
