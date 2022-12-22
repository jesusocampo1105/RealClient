// Import dependencies
import React from "react";

// Import Styles
import { Container, Row, Col } from "reactstrap";
import "../../../styles/Category.css";

// Import Images
import CategBDSM from "../../../assets/img/Categ-BDSM.png";
import CategToys from "../../../assets/img/Categ-Juguetes.png";
import CategLingerie from "../../../assets/img/Categ-Lingerie.png";
import CategCouple from "../../../assets/img/Categ-Parejas.png";

// Card categories
const categoryData = [
  {
    display: "Juguetes",
    image: CategToys,
  },

  {
    display: "BDSM",
    image: CategBDSM,
  },

  {
    display: "Lingerie",
    image: CategLingerie,
  },

  {
    display: "Parejas",
    image: CategCouple,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {/* Generate card category */}
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" key={index} className="mb-5 mt-5">
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.image} alt="Imagen Categoría" />
              </div>

              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
