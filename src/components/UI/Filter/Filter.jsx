// Import dependencies
import React from "react";

// Import Styles
import { Col } from "reactstrap";
import "../../../styles/Filter.css";

const Filter = () => {
  return (
    <>
      <Col lg="12">
        <div className="filter__category d-flex align-items-center justify-content-center">
          <button className="all__btn filterBtnActive">Todo</button>

          <button className="d-flex align-items-center gap-2">Juguetes</button>

          <button className="d-flex align-items-center gap-2">BDSM</button>

          <button className="d-flex align-items-center gap-2">Lingerie</button>

          <button className="d-flex align-items-center gap-2">Parejas</button>
        </div>
      </Col>
    </>
  );
};

export default Filter;
