// Import dependencies
import React from "react";
import { useDispatch } from "react-redux";

// Import Styles
import "../../pages/cart/cart.css";

// Import Components
import { cartActions } from "../store/CartSlice";
import { priceFormat } from "../../../App";


const TableRow = (props) => {
  // Props of the products added to the cart
  const { id, image01, title, price, quantity, totalPrice } = props.item;

  // Dispatch to remove a product
  const dispatch = useDispatch();

  // Remove a product from the cart
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="imagen producto" />
      </td>

      <td className="text-center">{title}</td>

      <td className="text-center cart__price-box">
        $ {priceFormat.format(price)}
      </td>

      <td className="text-center ">{quantity}</td>

      <td className="text-center cart__price-box">
        $ {priceFormat.format(totalPrice)}
      </td>

      <td className="text-center cart__icon-box">
        <i className="ri-delete-bin-fill" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default TableRow;
