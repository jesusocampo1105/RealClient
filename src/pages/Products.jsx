import React, { useState } from "react";
import Card from "../components/atomicDesign/Card";
import Header from "../components/header/Header";
import "../pages/products.css";

export default function Products() {


  const [mostrarComponente1, setMostrarComponente1] = useState(true);
  const [mostrarComponente2, setMostrarComponente2] = useState(false);
  return (
    <>
      <Header />
      <div className="products">
        <section className="sections row">
          <article className="btns">
            <button
              className="text-white btn btnOne"
              onClick={() => setMostrarComponente1(!mostrarComponente1)}
            >
              Paginas estaticas
            </button>
            <button
              className="text-white btn btnTwo"
              onClick={() => setMostrarComponente2(!mostrarComponente2)}
            >
              Paginas Dinamicas
            </button>
          </article>
          <div className={mostrarComponente1 ? "row" : null}>
            {mostrarComponente1 && (
              <article className="cards staticsPages">
                <Card />
                <Card tittle="Landing pages o páginas de aterrizaje" />
                <Card tittle="Página web educativa" />
                <Card tittle="Single page aplication" />
                <Card tittle="Página web de noticias o revista" />
                <Card tittle="Página web de foros" />
                <Card tittle="Blogs" />
                <Card tittle="Página web corporativa o de negocio" />
              </article>
            )}
          </div>

          <div className={mostrarComponente2 ? "row" : null}>
            {mostrarComponente2 && (
              <article className="cards dinamicsPages">
                <Card tittle="Catalogo online" />
                <Card tittle="Tienda online" />
                <Card tittle="Marketplace" />
                <Card tittle="Portafolio web" />
                <Card tittle="Página web educativa" />
                <Card tittle="Página web corporativa o de negocio" />
              </article>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
