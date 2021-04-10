import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <nav className="nav">
      <div className="nav__toggle" onClick={handleToggle}>
        <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
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
    </nav>
  );
};

export default Navbar;
