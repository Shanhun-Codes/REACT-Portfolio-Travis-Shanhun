import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../style/navBar.css";

const NavBar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isDropdownActive, setDropdownActive] = useState(false);

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

  const handleDropdownButton = (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropdownButton && e.target.closest("[data-dropdown]") === null) {
      setDropdownActive(false);
    } else {
      setDropdownActive(!isDropdownActive);
    }
  };

  const handleMenuItemClick = () => {
    setDropdownActive(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.matches("[data-dropdown-button]") &&
        e.target.closest("[data-dropdown]") === null
      ) {
        setDropdownActive(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="nav main-nav">
      {window.innerWidth <= 480 && (
        <div className={`dropdown ${isDropdownActive ? "active" : ""}`}>
          <button
            className="menu-button"
            data-dropdown-button
            onClick={handleDropdownButton}
          >
            Menu
          </button>
          <div className="dropdown-menu" data-dropdown>
            <ul>
              <li className="nav-list header-nav-list">
                <Link
                  className="about-link"
                  to="/"
                  onClick={handleMenuItemClick}
                >
                  About Me
                </Link>
              </li>

              <li className="nav-list header-nav-list">
                <Link
                  className="portfolio-link"
                  to="/portfolio"
                  onClick={handleMenuItemClick}
                >
                  Portfolio
                </Link>
              </li>

              <li className="nav-list header-nav-list">
                <Link
                  className="contact-link"
                  to="/contact"
                  onClick={handleMenuItemClick}
                >
                  Contact Me
                </Link>
              </li>

              <li className="nav-list header-nav-list">
                <Link
                  className="resume-link"
                  to="/resume"
                  onClick={handleMenuItemClick}
                >
                  Resumé
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {window.innerWidth > 480 && (
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
