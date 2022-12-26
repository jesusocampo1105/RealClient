// Import dependencies
import React from 'react'
import {useDispatch} from 'react-redux'

// Import Styles
import '../../../styles/Cart.css'

// Import Components
import {cartActions} from '../../../store/shopping-cart/cartSlice'

const TableRow = (props) => {
    const {id, image01, title, price, quantity, totalPrice} = props.item

    const dispatch = useDispatch()

    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id))
    }
  return (
    <tr>
      <td className='text-center cart__img-box'><img src={image01} alt="imagen producto"/></td>
      <td className='text-center'>{title}</td>
      <td className='text-center cart__price-box'>$ {price}</td>
      <td className='text-center '>{quantity}</td>
      <td className='text-center cart__price-box'>$ {totalPrice}</td>
      <td className='text-center cart__icon-box'><i className="ri-delete-bin-fill" onClick={deleteItem}></i></td>
    </tr>
  )
}

export default TableRow