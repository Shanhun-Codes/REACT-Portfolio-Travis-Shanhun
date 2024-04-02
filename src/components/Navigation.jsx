import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../style/navBar.css";
import DropdownNav from "./DropdownNav";

const NavBar = () => {
  // set useState
  const [width, setWidth] = useState(window.innerWidth);

  // useEffect to force page reload when device width changes - makes it so when mobile devices are rotated to wider mode changes for device width take effect
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth !== width) {
        setWidth(window.innerWidth);
        window.location.reload();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <nav className="nav main-nav">
      {window.innerWidth <= 480 ? (
        <DropdownNav />
      ) : (
        <ul>
          <li className="nav-list header-nav-list">
            <Link className="about-link" to="/">
              About Me
            </Link>
          </li>

          <li className="nav-list header-nav-list">
            <Link className="portfolio-link" to="/portfolio">
              Portfolio
            </Link>
          </li>

          <li className="nav-list header-nav-list">
            <Link className="contact-link" to="/contact">
              Contact Me
            </Link>
          </li>

          <li className="nav-list header-nav-list">
            <Link className="resume-link" to="/resume">
              Resumé
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
