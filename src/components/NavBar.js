import React, { useState } from "react";

import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "./NavBarStyles.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color,setColor]=useState(false);
  const changeColor=()=> window.scrollY>=100 ? setColor(true):setColor(false)

  window.addEventListener('scroll',changeColor);

  return (
    <div className={color? 'header header-bg':'header'}>
      <Link to="/">
        <h1>GT</h1>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/training">Training</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#FFF" }} />
        ) : (
          <FaBars size={20} style={{ color: "#FFF" }} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
