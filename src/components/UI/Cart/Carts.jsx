// Import dependencies
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Import styles
import { ListGroup } from "reactstrap";
import "../../../styles/Carts.css";

// Import components
import CartItem from "./CartItem";
import { cartUIActions } from "../../../store/shopping-cart/cartUISlice";

const Carts = () => {
  // Hide side cart
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(cartUIActions.toggle());
  };

  const cartProducts = useSelector((state) => state.cart.cartItems);

  // Update cart products subtotal
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i className="ri-close-circle-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">El carrito está vacío</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal: <span>$ {totalAmount}</span>
          </h6>
          <button>WhatsApp</button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
