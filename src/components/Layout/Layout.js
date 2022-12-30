//Library
import React from "react";
import { useSelector } from "react-redux";

//Component
import Header from "../Header/Header";
import Routes from "../../routes/Routes";
import Carts from "../UI/Cart/Carts";

const Layout = () => {

  const showCart = useSelector((state) => state.cartUI.cartIsVisible);

  return (
    <div>
      <Header />

      {showCart && <Carts />}

      <div>
        <Routes />
      </div>

    </div>
  );
};

export default Layout;
