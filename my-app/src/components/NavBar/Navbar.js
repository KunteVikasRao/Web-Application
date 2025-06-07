import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleNavigate = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => handleNavigate("/")}>
        MyApp
      </div>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <a onClick={() => handleNavigate("/")}>Home</a>
        <a onClick={() => handleNavigate("/courses")}>Courses</a>

        <div className={`navbar-dropdown ${dropdownOpen ? "active" : ""}`}>
          <span className="link" onClick={toggleDropdown}>
            Categories
          </span>
          <div className="navbar-dropdown-content">
            <a onClick={() => handleNavigate("/category/1")}>Category 1</a>
            <a onClick={() => handleNavigate("/category/2")}>Category 2</a>
            <a onClick={() => handleNavigate("/category/3")}>Category 3</a>
          </div>
        </div>

        <a onClick={() => handleNavigate("/contact")}>Contact Us</a>
        <a onClick={() => handleNavigate("/signup")}>Join as Member</a>
        <a onClick={() => handleNavigate("/profile")}>Profile</a>
      </div>

      <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu" role="button" tabIndex={0}>
        <div />
        <div />
        <div />
      </div>
    </nav>
  );
};

export default Navbar;
