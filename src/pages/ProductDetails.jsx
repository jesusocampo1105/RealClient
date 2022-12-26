// Import dependencies
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'

// Import data products
import Products from '../assets/data/products'

// Import Styles
import { Container, Row, Col } from "reactstrap";
import '../styles/ProductDetails.css'

// Import Components
import Helmet from "../components/Helmet/Helmet";
import ProductCard from '../components/UI/ProductCard/ProductCard'
import {cartActions} from '../store/shopping-cart/cartSlice'

const ProductDetails = () => {
  const {id} = useParams()
  const dispatch = useDispatch()

  const product = Products.find(product => product.id === id)

  const [previewImg, setPreviewImg] = useState(product.image01)

  const {category, title, price, image01} = product

  const relatedProduct = Products.filter(item => category === item.category && item.bestSeller === true)

  const addItem = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      price,
      image01
    }))
  }

  useEffect(() => {
    setPreviewImg(product.image01)
  }, [product])

  useEffect(() => {
    window.scrollTo(0,200)
  }, [product])

  return (
    <Helmet title={product.title}>
      {/* Hero */}
      <section>
        <div className="hero__img-details d-flex align-items-center">
          <h1 className="hero__title">Detalle del Producto</h1>
        </div>
      </section>

      {/* Images products */}
      <section className='product__details'>
        <Container>
          <Row>
            <Col>
              <div className="product__images">
                  <img src={product.image01} alt="Imagen producto" className='product__image' onClick={() => setPreviewImg(product.image01)}/>
                  <img src={product.image02} alt="Imagen producto" className='product__image' onClick={() => setPreviewImg(product.image02)}/>
                  <img src={product.image03} alt="Imagen producto" className='product__image' onClick={() => setPreviewImg(product.image03)}/>
              </div>
            </Col>
            
            <Col lg='4' md='4'>
              <div className="product__main-img">
                <img src={previewImg} alt="Imagen producto" className='w-100'/>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className="single__product-content">
                <h2 className='product__title mb-3'>{product.title}</h2>

                <p className='product__price-detail'>Precio: <span>$ {product.price}</span></p>

                <p className='product__category'>Categoría: <span>{product.category}</span></p>
                
                <p className='product__size'>Talla: <span>{product.size}</span></p>

                <button className='addToCart__btn' onClick={addItem}>Agregar al Carrito</button>
              </div>
            </Col>

            <Col lg='12' className='text-center'>
              <h2 className="title mt-4">¿Qué te ofrecemos?</h2>

              <p className="product__desc">{product.description}</p>

              <div className="product__features d-flex align-items-center justify-content-evenly">
                
                {product.feature1 === '' ? (<p></p>) : (<p className="product__feature">{product.feature1}</p>)}
                
                {product.feature2 === '' ? (<p></p>) : (<p className="product__feature">{product.feature2}</p>)}
                
                {product.feature3 === '' ? (<p></p>) : (<p className="product__feature">{product.feature3}</p>)}
                
              </div>
            </Col>

            <Col lg='12' className='text-center'>
              <h2 className="title mt-5 mb-5">Te puede interesar</h2>
            </Col>

            {
              relatedProduct.map(item => (
                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='d-flex'>
                  <ProductCard item={item}/>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetails