//Library
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";

//Style
import { Container, Col, Row, Table } from "reactstrap";
import "../styles/Cart.css";

//Component
import Helmet from "../../components/helmet/Helmet";
import TableRow from "../../components/table/TableRow";
import { priceFormat } from "../App";


const Cart = () => {
  // Select cart items
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Select total amount
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Carrito">
      <section>
        <div className="hero__img-cart d-flex align-items-center">
          <h1 className="hero__title">Detalle de la compra</h1>
        </div>
      </section>

      {/* Table */}
      <Container>
        <Row>
          <Col lg="12">
            {/* Show cart products in table */}
            {cartItems.length === 0 ? (
              <h3 className="text-center mt-5 mb-5">El carrito está vacío</h3>
            ) : (
              <Table
                bordered
                responsive
                hover
                className="table mt-5 text-center"
              >
                <thead>
                  <tr>
                    <th>Imagen</th>
                    <th>Nombre del Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th>Opciones</th>
                  </tr>
                </thead>

                <tbody>
                  {/* Generate table rows */}
                  {cartItems.map((item) => (
                    <TableRow item={item} key={item.id} />
                  ))}
                </tbody>
              </Table>
            )}

            <div className="cart__content">
              <h3 className="cart__subtotal">
                Subtotal: <span>$ {priceFormat.format(totalAmount)}</span>
              </h3>

              <p className="cart__desc">
                Los precios ya incluyen IVA. El costo de envío se indicará al
                finalizar la compra.
              </p>

              <div className="cart__btns d-flex gap-5">
                {/* Send message to whatsapp for purchase */}
                <ReactWhatsapp
                  number="57-320-251-0584"
                  message={`Buen día, me gustaría adquirir los siguientes productos: ${cartItems.map(
                    (item) =>
                      item.quantity + " " + item.title + " $ " + item.totalPrice
                  )} para un Total de $ ${totalAmount}`}
                  className="cart__btn"
                >
                  WhatsApp
                </ReactWhatsapp>

                <button className="cart__btn">
                  <Link to="/products">Continuar Comprando</Link>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Cart;
