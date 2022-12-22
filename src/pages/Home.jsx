import React from 'react'
import Helmet from '../components/Helmet/Helmet'

import {Container, Row, Col} from 'reactstrap'
import '../styles/Home.css'

import Category from '../components/UI/Category/Category'

const featureData = [
  {
    icon: <i className="ri-motorbike-fill"></i>,
    description: 'Entregas rápidas en Bogotá de 30/60 min. Envíos Nacionales.'
  },
  
  {
    icon: <i className="ri-archive-line"></i>,
    description: 'Empaque discreto, sin marcas.'
  },
  
  {
    icon: <i className="ri-shopping-cart-2-fill"></i>,
    description: 'Compra fácil y de manera segura.'
  },
]


const Home = () => {
  return (
    <Helmet title='Inicio'>
      {/* Hero */}
      <section>
        <div className="hero__img"></div>
      </section>

      {/* Categories */}
      <section className='pt-0'>
        <Category/>
      </section>

      {/* What do we offer you? */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='feature__title mt-4'>¿Qué te ofrecemos?</h2>

              <p className="feature__text">
                A continuación te presentamos los beneficios de comprar en nuestra tienda.
              </p>
            </Col>

            {/* Generate features about offer */}
            {featureData.map((item, index) => (
              <Col lg='4' md='4' key={index} className='mt-2'>
                <div className='feature__item text-center p-3'>
                  <div className="feature__item-icon">
                    {item.icon}
                  </div>

                  <p className='m-0'>{item.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home