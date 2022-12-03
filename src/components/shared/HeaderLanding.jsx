import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import logoRed from "../../assets/home-assets/logo-red.png";

const HeaderLanding = () => {
  const hamMenu = useRef();
  const navBar = useRef();

  const hamMenuClick = () => {
    hamMenu.current.classList.toggle("close-menu");
    navBar.current.classList.toggle("nav-bar__open");
  };

  const navListClick = (e) => {
    if (e.target.classList.contains("nav-link")) {
      hamMenu.current.classList.toggle("close-menu");
      navBar.current.classList.toggle("nav-bar__open");
    }
  };

  const navLinkFunction = ({ isActive }) =>
    isActive ? `nav-link nav-link__active` : "nav-link";

  return (
    <header className="header-general">
      <div ref={hamMenu} className="hamburger-menu" onClick={hamMenuClick}>
        <div className="line-hamburger-menu"></div>
        <div className="line-hamburger-menu"></div>
        <div className="line-hamburger-menu"></div>
      </div>
      <nav ref={navBar} className="nav-bar">
        <ul className="nav-list" onClick={navListClick}>
          <li className="nav-item">
            <NavLink to="/" className={navLinkFunction}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about-us" className={navLinkFunction}>
              Nosotros
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/opinapace" className={navLinkFunction}>
              Opinapace
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to='/' className="container-logo-header">
        <img src={logoRed} alt="logo-header" />
      </NavLink>
    </header>
  );
};

export default HeaderLanding;
