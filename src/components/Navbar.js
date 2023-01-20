import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  return (
    <nav className="navbar container">
      <h1 className="logo">
        <a href="#">LILAS.</a>
      </h1>

      <ul className={toggleBtn ? `navbar-content` : "navbar-content hide"}>
        <li className="nav-item">
          <a href="#">Home</a>
        </li>
        <li className="nav-item">
          <a href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="nav-icons">
        {toggleBtn ? (
          <button onClick={() => setToggleBtn(!toggleBtn)} className="nav-btn">
            <FaTimes></FaTimes>
          </button>
        ) : (
          <button onClick={() => setToggleBtn(!toggleBtn)} className="nav-btn">
            <FaBars></FaBars>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
