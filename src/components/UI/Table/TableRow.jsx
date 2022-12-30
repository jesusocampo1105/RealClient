// Import dependencies
import React from "react";
import { useDispatch } from "react-redux";

// Import Styles
import "../../../styles/Cart.css";
import '../../../styles/tablerow.css'

// Import Components
import { cartActions } from "../../../store/shopping-cart/cartSlice";
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
    <tr className="products">
      <td className="name">{title}</td>

      <td className="text-center cart__price-box">
        $ {priceFormat.format(totalPrice)}
      </td>

      <td className="text-center ">unidades: {quantity}</td>

      <td className="text-center cart__icon-box">
        <i className="ri-delete-bin-fill" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default TableRow;
