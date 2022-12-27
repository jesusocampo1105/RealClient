import ShoppingCar from "./ShoppingCar.png";
import LogoSinFondo from "./LogoSinFondo.png";
import style from "../header/header.css";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Footer from "../footer/Footer";

const Header = () => {
  return (
    <form className="d-flex justify-content-between navbar">
      <img src={LogoSinFondo} alt="ShoppingCar" className="imageDaniCode" />
      <ul className="navbarText">
        <li>


        </li>
      </ul>
      <img src={ShoppingCar} alt="" className="imageShoppingCar" />
    </form>
  );
}

export default Header;
