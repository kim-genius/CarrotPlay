import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <i className="fa-brands fa-accusoft"></i>
        <Link to="/">Daangn Play</Link>
      </div>
      <ul className="navbar__menu">
        <li>
          <Link to="/courses">courses</Link>
        </li>
        <li>
          <Link to="/fa">fault</Link>
        </li>
      </ul>
      <ul className="navbar__icons">
        <li>
          <i className="fa-brands fa-twitter"></i>
        </li>
        <li>
          <i className="fa-brands fa-facebook"></i>
        </li>
      </ul>

      <a href="#" className="navbar__toggleBtn">
        <i className="fas fa-bars"></i>
      </a>
    </nav>
  );
};

export default Navbar;
