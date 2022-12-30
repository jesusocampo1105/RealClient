import ShoppingCar from "./ShoppingCar.png";
import LogoSinFondo from "./LogoSinFondo.png";
import "../header/header.css";
import Products from "../../pages/products/Products";

// import link
import { Link, link } from "react-router-dom";

const HeaderTest = () => {
  return (
    <form className="d-flex justify-content-between navbar">
      <img src={LogoSinFondo} alt="ShoppingCar" className="imageDaniCode" />
      
      <ul className="navbarText">
        <li className="section1">
          <Link to={"/"}>
            <button className="navOption1">Inicio</button>
          </Link>

          <Link to={"/"}>
            <button className="navOption">Preguntas frecuentes</button>
          </Link>

          <Link to={"/"}>
            <button className="navOption">Testimonios</button>
          </Link>

          <Link to={"/"}>
            <button className="navOption">Contacto</button>
          </Link>

          <Link to={"/Products"}>
            <button className="navOption1">Productos</button>
          </Link>
        </li>
      </ul>
      <Link to={"/shoppingcar"}>
        <img src={ShoppingCar} className="imageShoppingCar" />
      </Link>
    </form>
  );
};

export default Header;
