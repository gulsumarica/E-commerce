import React from "react";
import Clients from "../layout/Clients";
import ShopPageComponent from "../components/ShopPageComponent";
import Filter from "../components/Filter";
import ProductsShop from "../components/ProductsShop";

function Shop() {
  return (
    <>
      <ShopPageComponent />
      <Filter />
      <ProductsShop />
      <Clients />
    </>
  );
}

export default Shop;
