// Import dependencies
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// Import Styles
import "../../../styles/ProductCard.css";

// Import components
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { priceFormat } from "../../../App";

const ProductCard = (props) => {
  // Props with the product information
  const { id, title, image01, price } = props.item;

  // Function to add products to cart
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
    <div className="product product__item d-flex flex-column">

      <div className="product__content d-flex flex-column">
        <h5>
          <Link to={`/products/${id}`}>{title}</Link>
        </h5>

        <div className="d-flex align-items-center justify-content-between flex-column">
          <span className="product__price">$ {priceFormat.format(price)}</span>

          <button className="addToCart__btn" onClick={addToCart}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
