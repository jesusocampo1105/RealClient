// Import dependencies
import React from 'react'
import {Link} from 'react-router-dom'

// Import Styles
import '../../../styles/ProductCard.css'

const ProductCard = (props) => {

  // Props with the product information
  const {id, title, image01, price} = props.item

  return (
    <div className='product__item d-flex flex-column'>
      <div className="product__img">
        <img src={image01} alt="Imagen producto" className='w-50'/>
      </div>

      <div className="product__content d-flex flex-column">
        <h5>
          <Link to={`/products/${id}`}>{title}</Link>
        </h5>

        <div className='d-flex align-items-center justify-content-between flex-column'>
          <span className='product__price'>$ {price}</span>

          <button className='addToCart__btn'>Agregar al Carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard