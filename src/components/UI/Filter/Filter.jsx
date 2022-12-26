// Import dependencies
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

// Import data products
import Products from "../../../assets/data/products";

// Import Styles
import { Col } from "reactstrap";
import "../../../styles/Filter.css";
import "../../../styles/Pagination.css";

// Import components
import ProductCard from "../ProductCard/ProductCard";

const Filter = () => {
  // State for categories
  const [category, setCategory] = useState("ALL");

  // State for bestseller products
  const [allProducts, setAllProducts] = useState(Products);

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);

  // Products per page
  const productPerPage = 8;

  const visitedPage = pageNumber * productPerPage;

  // Displayed page
  const displayPage = allProducts.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  // Number of pages to generate
  const pageCount = Math.ceil(allProducts.length / productPerPage);

  // Switch to selected page
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Filter all products
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
      {displayPage.map((item) => (
        <Col lg="3" md="4" xs="6" key={item.id} className="mt-5 d-flex">
          <ProductCard item={item} />
        </Col>
      ))}

      {/* Pagination */}
      <div>
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={changePage}
          previousLabel={"Anterior"}
          nextLabel={"Siguiente"}
          containerClassName="paginationBttns"
        />
      </div>
    </>
  );
};

export default Filter;
