//Library
import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//Style
import { Container } from "reactstrap";
import "../../styles/Header.css";

//Image
import Logo from "../../assets/img/LogoSinFondo.png";

//Component
import { cartUIActions } from "../../store/shopping-cart/cartUISlice";

//Array Pages
const nav__links = [
  {
    display: "Inicio",
    path: "/home",
  },

  {
    display: "Testimonios",
    path: "/home",
  },
  {
    display: "Contacto",
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

  // Header reference
  const headerRef = useRef(null);

  // Selector for cart badge
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  // Dispatch to cart sidebar
  const dispatch = useDispatch();

  // Show or hide side menu
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  // Show or hide side cart
  const toggleCart = () => {
    dispatch(cartUIActions.toggle());
  };

  
  return (
    <header className="header" ref={headerRef}>
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

              <span className="cart__badge">{totalQuantity}</span>
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
