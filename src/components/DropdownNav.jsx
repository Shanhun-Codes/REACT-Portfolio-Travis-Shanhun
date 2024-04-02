import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DropdownNav = () => {
  const [isDropdownActive, setDropdownActive] = useState(false);

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
    <nav>
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
              <Link className="about-link" to="/" onClick={handleMenuItemClick}>
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
    </nav>
  );
};

export default DropdownNav;
