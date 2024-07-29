import React, { useState } from "react";
import "./Header.css";
import profilePicture from "./images/profilePhoto.png"; // Add your profile picture here

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img src={profilePicture} alt="Profile" className="profile-picture" />
          <div>
            <div className="name">Shreyas Acharya</div>
            <div className="designation">Front-End Developer</div>
          </div>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
