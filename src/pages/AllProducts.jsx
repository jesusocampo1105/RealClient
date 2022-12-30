// Import dependencies
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

// Import data products
import Products from "../assets/data/products";

// Import Styles
import { Container, Row, Col } from "reactstrap";
import "../styles/AllProducts.css";
import "../styles/Filter.css";
import "../styles/Pagination.css";

// Import Components
import Helmet from "../components/Helmet/Helmet";
import ProductCard from "../components/UI/ProductCard/ProductCard";

const AllProducts = () => {
  // Search product
  const [search, setSearch] = useState("");
  const [allProducts, setAllProducts] = useState(Products);

  // Filter searched products
  const searchedProduct = allProducts.filter((item) => {
    if (search.value === "") return item;

    if (item.title.toLowerCase().includes(search.toLowerCase())) return item;
  });

  // Filter all products
  const [category, setCategory] = useState("Paginas estaticas");

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);

  // Products per page
  const productPerPage = 8;

  const visitedPage = pageNumber * productPerPage;

  // Displayed page
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  // Number of pages to generate
  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  // Switch to selected page
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Filter all products
  useEffect(() => {
    if (category === "paginas estaticas") {
      // Filter all products
      setAllProducts(Products);
    }

    if (category === "Paginas dinamicas") {
      // Filter products by category
      const filteredProducts = Products.filter(
        (item) => item.category === "Paginas dinamicas"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  
  return (
    <Helmet title="Productos">

      {/* Filter */}
      <section className="bg">
        <Container>
          <Row>
            <Col lg="12">
              <div className="filter__category d-flex align-items-center justify-content-center">
                <button
                  className={`all__btn ${
                    category === "paginas estaticas" ? "filterBtnActive" : ""
                  }`}
                  onClick={() => setCategory("paginas estaticas")}
                >
                  Paginas estaticas
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Paginas dinamicas" ? "filterBtnActive" : ""
                  }`}
                  onClick={() => setCategory("Paginas dinamicas")}
                >
                  Paginas dinamicas
                </button>

              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* All Products */}
                 <div className="allproducts">
      <Container>
        <Row>
          {/* Show all products */}
          {displayPage.map((item) => (
            <Col lg="3" md="4" xs="6" key={item.id} className="mt-5 d-flex">
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
      </div>
    </Helmet>

  );
};

export default AllProducts;
