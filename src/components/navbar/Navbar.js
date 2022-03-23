import React, { useRef } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import NavCartMenu from "./NavCartMenu.js";
function Navbar() {
  const navComponent = useRef();
  const location = useLocation();
  const collapseHandle = () => {
    var navbar = navComponent.current;
    if (navbar.className === "navbar") {
      navbar.className += " responsive";
    } else {
      navbar.className = "navbar";
    }
  };

  return (
    <>
      <div className="navbar" ref={navComponent}>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Gallary
        </Link>
        <NavCartMenu />
        <span className="icon" onClick={collapseHandle}>
          <MenuIcon />
        </span>
      </div>
    </>
  );
}

export default Navbar;
