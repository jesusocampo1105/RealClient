// Import dependencies
import React, { useState, useEffect } from "react";

// Import data products
import Products from "../../../assets/data/products";

// Import Styles
import { Col } from "reactstrap";
import "../../../styles/Filter.css";

// Import components
import ProductCard from "../ProductCard/ProductCard";

const Filter = () => {
  // Application states
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(Products);

  useEffect(() => {
    if (category === "ALL") {
      // Filter all products best seller
      const filteredProducts = Products.filter(
        (item) => item.bestSeller === true
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BDSM") {
      // Filter products best seller for their category
      const filteredProducts = Products.filter(
        (item) => item.category === "BDSM" && item.bestSeller === true
      );

      setAllProducts(filteredProducts);
    }

    if (category === "TOYS") {
      // Filter products best seller for their category
      const filteredProducts = Products.filter(
        (item) => item.category === "Juguetes" && item.bestSeller === true
      );

      setAllProducts(filteredProducts);
    }

    if (category === "LINGERIE") {
      // Filter products best seller for their category
      const filteredProducts = Products.filter(
        (item) => item.category === "Lencería" && item.bestSeller === true
      );

      setAllProducts(filteredProducts);
    }

    if (category === "COUPLES") {
      // Filter products best seller for their category
      const filteredProducts = Products.filter(
        (item) => item.category === "Parejas" && item.bestSeller === true
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <>
      {/* Filter  */}
      <Col lg="12">
        <div className="filter__category d-flex align-items-center justify-content-center">
          <button
            className={`all__btn ${
              category === "ALL" ? "filterBtnActive" : ""
            }`}
            onClick={() => setCategory("ALL")}
          >
            Todo
          </button>

          <button
            className={`d-flex align-items-center gap-2 ${
              category === "TOYS" ? "filterBtnActive" : ""
            }`}
            onClick={() => setCategory("TOYS")}
          >
            Juguetes
          </button>

          <button
            className={`d-flex align-items-center gap-2 ${
              category === "BDSM" ? "filterBtnActive" : ""
            }`}
            onClick={() => setCategory("BDSM")}
          >
            BDSM
          </button>

          <button
            className={`d-flex align-items-center gap-2 ${
              category === "LINGERIE" ? "filterBtnActive" : ""
            }`}
            onClick={() => setCategory("LINGERIE")}
          >
            Lingerie
          </button>

          <button
            className={`d-flex align-items-center gap-2 ${
              category === "COUPLES" ? "filterBtnActive" : ""
            }`}
            onClick={() => setCategory("COUPLES")}
          >
            Parejas
          </button>
        </div>
      </Col>

      {/* Cards with products bestseller */}
      {allProducts.map((item) => (
        <Col lg="3" md="4" xs="6" key={item.id} className="mt-5 d-flex">
          <ProductCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default Filter;
