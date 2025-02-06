import React from "react";
import ProductDetail from "../components/ProductDetail";
import images from "../data/images.json";

function BestProductList() {
  return (
    <div className="flex flex-col m-4 gap-4">
      <div className="flex flex-col items-center gap-2 mt-8 mb-4 md:w-full">
        <h2 className="text-[#737373]">Featured Products</h2>
        <h3 className="font-bold w-40 text-center md:w-full">
          BESTSELLER PRODUCTS
        </h3>
        <p className="text-[#737373] w-60 text-center md:w-full">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <div className="md:flex-col">
        <div className="md:flex items-center justify-center gap-4 object-contain w-full h-full">
          {images.grup1.map((image) => (
            <ProductDetail key={image.id} image={image} />
          ))}
        </div>
        <div className="md:flex items-center justify-center gap-4">
          {images.grup2.map((image) => (
            <ProductDetail key={image.id} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestProductList;
