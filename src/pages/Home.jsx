import React from 'react'
import Helmet from '../components/Helmet/Helmet'

import {Container, Row, Col} from 'reactstrap'
import '../styles/Home.css'

const Home = () => {
  return (
    <Helmet title='Inicio'>
      <section>
        <div className="hero__img"></div>
      </section>
    </Helmet>
  )
}

export default Home