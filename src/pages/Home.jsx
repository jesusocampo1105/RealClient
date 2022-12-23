// Import dependencies
import React from "react";

// Import Styles
import { Container, Row, Col } from "reactstrap";
import "../styles/Home.css";

// Import images
import Img2 from '../assets/img/Img-2.jpg'

// Import components
import Helmet from "../components/Helmet/Helmet";
import Category from "../components/UI/Category/Category";
import Filter from "../components/UI/Filter/Filter";
import TestimonialSlider from '../components/UI/Slider/TestimonialSlider'

// Data
const featureData = [
  {
    icon: <i className="ri-motorbike-fill"></i>,
    description: "Entregas rápidas en Bogotá de 30/60 min. Envíos Nacionales.",
  },

  {
    icon: <i className="ri-archive-line"></i>,
    description: "Empaque discreto, sin marcas.",
  },

  {
    icon: <i className="ri-shopping-cart-2-fill"></i>,
    description: "Compra fácil y de manera segura.",
  },
];

const Home = () => {
  return (
    // Page title
    <Helmet title="Inicio">
      {/* Hero */}
      <section>
        <div className="hero__img"></div>
      </section>

      {/* Categories */}
      <section className="pt-0">
        <Category />
      </section>

      {/* What do we offer you? */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="title mt-4">¿Qué te ofrecemos?</h2>

              <p className="feature__text text-center">
                A continuación te presentamos los beneficios de comprar en
                nuestra tienda.
              </p>
            </Col>

            {/* Generate features about offer */}
            {featureData.map((item, index) => (
              <Col lg="4" md="4" key={index} className="mt-2">
                <div className="feature__item text-center p-3">
                  <div className="feature__item-icon">{item.icon}</div>

                  <p className="m-0">{item.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Popular products */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="title mt-4">Productos más vendidos</h2>
            </Col>

            {/* Filter product best seller for category */}
            <Filter />
          </Row>
        </Container>
      </section>

      {/* Hero */}
      <section>
        <div className="hero__img hero__img-02"></div>
      </section>

      {/* About us */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="title mt-5">¿Quiénes Somos?</h2>

              <p className="feature__text">
                Somos una tienda de productos eróticos, juguetes sexuales y
                lencería de seducción, con una trayectoría de 3 años en el
                mercado Bogotano.
              </p>

              <p className="feature__text">
                En <span>Fantasy Sex Shop</span> nos hemos caracterizado por el
                buen trato hacia nuestros clientes, discreción y
                profesionalismo, además de contar con una atención personalizada
                respecto a los productos que comercializamos.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonial */}
      <section>
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg='6' md='6' className="text-center">
              <div>
                <h2 className="title mt-3">Testimonios</h2>

                <TestimonialSlider/>
              </div>

            </Col>
             
            <Col lg='6' md='6'>
              <img src={Img2} alt="Imagen testimonial" className="imagen__testimonial w-100 mb-4"/>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
