import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  iconHome,
  logoWhite,
  iconCalendar,
  iconTeam,
  iconOutslanding,
  iconNews,
  iconSettings,
  imgUser,
  iconLogout,
} from "../../assets";
import { startLogout } from "../../redux/actions/auth";
import "./shared.css";

const Navbar = () => {
  const hamMenu = useRef();
  const navBar = useRef();
  const navigate = useNavigate();

  const { role } = useSelector((state) => state.auth);

  const hamMenuClick = () => {
    hamMenu.current.classList.toggle("close-menu");
    navBar.current.classList.toggle("navbar__close");
  };

  const navListClick = (e) => {
    if (e.target.classList.contains("nav-link")) {
      hamMenu.current.classList.toggle("close-menu");
      navBar.current.classList.toggle("navbar__close");
    }
  };

  const { avatar, name } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
    navigate("/");
  };

  return (
    <>
      <div
        ref={hamMenu}
        className="hamburger-menu hamburger-menu__dashboard close-menu"
        onClick={hamMenuClick}
      >
        <div className="line-hamburger-menu line-hamburger-menu__dashboard"></div>
        <div className="line-hamburger-menu line-hamburger-menu__dashboard"></div>
        <div className="line-hamburger-menu line-hamburger-menu__dashboard"></div>
      </div>
      <nav ref={navBar} className="navbar">
        {/* Menu hamburguesa y equis */}
        {/* Menú de navegación */}
        <section className="navbar__logo">
          <Link to="/">
            <img className="navbar__img-logo" src={logoWhite} alt="" />
          </Link>
        </section>
        <section className="navbar__menu">
          <ul>
            <li>
              <NavLink
                to="/opina/clipping"
                className={({ isActive }) =>
                  isActive ? "nav-active navlink" : "navlink"
                }
              >
                <img src={iconHome} alt="" />
                Clipping
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/opina/team"
                className={({ isActive }) =>
                  isActive ? "nav-active navlink" : "navlink"
                }
              >
                <img src={iconTeam} alt="" />
                Equipo
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/opina/news"
                className={({ isActive }) =>
                  isActive ? "nav-active navlink" : "navlink"
                }
              >
                <img src={iconNews} alt="" />
                Noticias
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/opina/webinar"
                className={({ isActive }) =>
                  isActive ? "nav-active navlink" : "navlink"
                }
              >
                <img src={iconCalendar} alt="" />
                Webinar
              </NavLink>
            </li>
            {role === "root" && (
              <li>
                <NavLink
                  to="/opina/management"
                  className={({ isActive }) =>
                    isActive ? "nav-active navlink" : "navlink"
                  }
                >
                  <img
                    src={iconSettings}
                    className={`navbar__icon-img ${({ isActive }) =>
                      isActive ? "nav-active" : ""}`}
                    alt=""
                  />
                  Configuraciones
                </NavLink>
              </li>
            )}
          </ul>
        </section>
        <section className="navbar__footer">
          <div className="navbar__content-user-img">
            <img className="navbar__img-user" src={avatar} alt="" />
          </div>
          <div className="navbar__info-user">
            <span>{name.toUpperCase()}</span>
            <small>Gerente General</small>
          </div>
          <div className="navbar__icon-logout cPoint">
            <img src={iconLogout} alt="" onClick={handleLogout} />
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
