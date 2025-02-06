import React from "react";
import shopImages from "../data/shopImages.json";
import ProductDetail from "../components/ProductDetail";

function ProductsShop() {
  return (
    <div className="flex flex-col">
      <div className=" flex flex-col items-center justify-around md:flex md:flex-row ">
        {shopImages.ilkSira.map((image) => (
          <ProductDetail key={image.key} image={image} />
        ))}
      </div>
      <div className=" flex flex-col items-center justify-around md:flex md:flex-row ">
        {shopImages.ikinciSira.map((image) => (
          <ProductDetail key={image.key} image={image} />
        ))}
      </div>
      <div className=" flex flex-col items-center justify-around md:flex md:flex-row ">
        {shopImages.ucuncuSira.map((image) => (
          <ProductDetail key={image.key} image={image} />
        ))}
      </div>
    </div>
  );
}

export default ProductsShop;
