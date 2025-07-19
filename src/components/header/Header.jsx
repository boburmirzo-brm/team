import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css"

const Header = () => {
  const {pathname} = useLocation()
  
  const isDark = pathname.startsWith("/haqida") || pathname.startsWith("/help")

  return (
    <header className={`header ${isDark ? "dark" : ""}`}>
      <NavLink className="header__link" to={"/"}>Home</NavLink>
      <NavLink className="header__link" to={"/haqida"}>About</NavLink>
      <NavLink className="header__link" to={"/contact"}>Contact</NavLink>
      <NavLink className="header__link" to={"/help"}>Help</NavLink>
      <NavLink className="header__link" to={"/login"}>Login</NavLink>
    </header>
  );
};

export default Header;
