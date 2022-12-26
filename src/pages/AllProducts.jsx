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
  const [category, setCategory] = useState("ALL");

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
    if (category === "ALL") {
      // Filter all products
      setAllProducts(Products);
    }

    if (category === "BDSM") {
      // Filter products by category
      const filteredProducts = Products.filter(
        (item) => item.category === "BDSM"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "TOYS") {
      // Filter products by category
      const filteredProducts = Products.filter(
        (item) => item.category === "Juguetes"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "LINGERIE") {
      // Filter products by category
      const filteredProducts = Products.filter(
        (item) => item.category === "Lencería"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "COUPLES") {
      // Filter products by category
      const filteredProducts = Products.filter(
        (item) => item.category === "Parejas"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Productos">
      {/* Hero */}
      <section>
        <div className="hero__img-products d-flex align-items-center">
          <h1 className="hero__title">Productos</h1>
        </div>
      </section>

      {/* Search */}
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="search__widget d-flex align-items-center justify-content-between mt-5">
                <input
                  type="text"
                  placeholder="Busca un producto"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Filter */}
      <section>
        <Container>
          <Row>
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
          </Row>
        </Container>
      </section>

      {/* All Products */}
      <Container>
        <Row>
          {/* Show all products */}
          {displayPage.map((item) => (
            <Col lg="3" md="4" xs="6" key={item.id} className="mt-5 d-flex">
              <ProductCard item={item} />
            </Col>
          ))}

          <div>
            {/* Pagination */}
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel={"Anterior"}
              nextLabel={"Siguiente"}
              containerClassName="paginationBttns"
            />
          </div>
        </Row>
      </Container>
    </Helmet>
  );
};

export default AllProducts;
