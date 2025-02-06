import React from "react";
import Clients from "../layout/Clients";
import Header from "../layout/Header";
import ShopPageComponent from "../components/ShopPageComponent";
import Filter from "../components/Filter";
import Footer from "../layout/Footer";
import ProductsShop from "../components/ProductsShop";

function Shop() {
  return (
    <>
      <ShopPageComponent />
      <Filter />
      <ProductsShop />
      <Clients />
      <Footer />
    </>
  );
}

export default Shop;
