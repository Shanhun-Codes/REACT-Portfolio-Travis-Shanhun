import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../style/navBar.css";

const NavBar = () => {
  // set useState
  const [width, setWidth] = useState(window.innerWidth);
  const [isDropdownActive, setDropdownActive] = useState(false);

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

  // makes menu button dropdown take effect
  const handleDropdownButton = (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropdownButton && e.target.closest("[data-dropdown]") === null) {
      setDropdownActive(false);
    } else {
      setDropdownActive(!isDropdownActive);
    }
  };

  // makes dropdown menu disappear once user selects option
  const handleMenuItemClick = () => {
    setDropdownActive(false);
  };

  // makes dropdown menu disappear if user clicks outside of dropdown box
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
