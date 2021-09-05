import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = ({ scrollNav, toggleHome }) => {
  return (
    <nav className={scrollNav && "nav-bg"}>
      <Link onClick={toggleHome} className="logo">
        SemiColon;
      </Link>
      <div className="links">
        <Link onClick={toggleHome} className="navbar-btn">
          Home
        </Link>
        <Link
          to="sign-in"
          smooth={true}
          duration={1000}
          offset={-70}
          spy={true}
          exact="true"
          className="navbar-btn"
        >
          Sign In
        </Link>
        <Link
          to="sign-up"
          smooth={true}
          duration={1000}
          spy={true}
          offset={-70}
          exact="true"
          className="navbar-btn"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
