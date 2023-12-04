import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { Menu, Xmark } from "../Icon/NavbarIcons";
import "./Navbar.css";

const navLinks = [
  { text: "Dashboard", url: "/dashboard" },
  { text: "Create Ads", url: "/create-ads" },
  // Add more navigation links as needed
];

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <Link to="#">APP LOGO</Link>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          {navLinks.map((link, index) => (
            <li className="option mobile-option" key={index} onClick={closeMobileMenu}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <ul className="signin-up">
        {navLinks.map((link, index) => (
          <li className="sign-in" key={index} onClick={closeMobileMenu}>
            <Link to={link.url}>{link.text}</Link>
          </li>
        ))}
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <Xmark className="menu-icon" />
        ) : (
          <Menu className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
