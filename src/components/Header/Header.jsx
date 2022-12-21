import React, { useRef } from "react";
import { NavLink, Link } from "react-router-dom";

import Logo from "../../assets/img/Logo.svg";

import { Container } from "reactstrap";
import "../../styles/Header.css";

// Navigation Links
const nav__links = [
  {
    display: "Inicio",
    path: "/home",
  },
  {
    display: "Productos",
    path: "/products",
  },
  {
    display: "Carrito",
    path: "/cart",
  },
];

const Header = () => {
  // Menu reference
  const menuRef = useRef(null);

  // Show or hide side menu
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>

          {/* Menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">

              {/* Generate navigation links */}
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Nav right icons */}
          <div className="nav__right d-flex align-items-center gap-5">
            <span className="cart__icon">
              <i className="ri-shopping-cart-2-fill"></i>

              <span className="cart__badge">2</span>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
