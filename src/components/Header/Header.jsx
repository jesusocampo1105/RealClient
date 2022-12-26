// Import dependencies
import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Import Styles
import { Container } from "reactstrap";
import "../../styles/Header.css";

// Import images
import Logo from "../../assets/img/Logo.svg";

// Import components
import { cartUIActions } from "../../store/shopping-cart/cartUISlice";

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

  useEffect(() => {
    // Sticky header when scrolling
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

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
            <span className="cart__icon" onClick={toggleCart}>
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
