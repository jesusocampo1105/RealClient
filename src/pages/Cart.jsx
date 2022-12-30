// Import dependencies
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";

// Import Styles
import { Container, Col, Row, Table } from "reactstrap";
import "../styles/Cart.css";

// Import Components
import Helmet from "../components/Helmet/Helmet";
import TableRow from "../components/UI/Table/TableRow";
import { priceFormat } from "../App";

const Cart = () => {
  // Select cart items
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Select total amount
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Carrito">

      {/* Table */}
      <Container>
        <Row>
          <Col lg="12">
            {/* Show cart products in table */}
            {cartItems.length === 0 ? (
              <h3 className="text-center mt-5 mb-5">Aun no tienes productos por comprar</h3>
            ) : (

              <article className="table">
                  {/* Add products */}
                  {cartItems.map((item) => (
                    <TableRow item={item} key={item.id} />
                  ))}
              </article>

            )}

            <div className="cart__content">

              <div className="btncart cart__btns d-flex gap-5">


                {/* Library Whatsapp Message */}
                <ReactWhatsapp
                  number="57-323-201-4153"
                  message={`Buen día, deseo adquirir un producto que se encuentra en la pagina web: ${cartItems.map(
                    (item) =>
                      item.quantity + " " + item.title + " $ " + item.totalPrice
                  )} Que tiene el valor de 🧑‍💻 $ ${totalAmount}`}
                  className="cart__btn"
                >
                  Total aproximado = ${priceFormat.format(totalAmount)}
                </ReactWhatsapp>


              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Cart;
