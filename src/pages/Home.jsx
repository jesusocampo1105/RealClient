import React from 'react'
import Helmet from '../components/Helmet/Helmet'

// import {Container, Row, Col} from 'reactstrap'
import '../styles/Home.css'

import Category from '../components/UI/Category/Category'

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
    </Helmet>
  )
}

export default Home