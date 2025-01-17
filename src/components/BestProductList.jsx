import React from "react";
import images from "../data/images.json";

function BestProductList() {
  return (
    <div className="flex flex-col m-4 gap-4">
      <div className="flex flex-col items-center gap-2 mt-8 mb-4">
        <h2 className="text-[#737373]">Featured Products</h2>
        <h3 className="font-bold w-40 text-center">BESTSELLER PRODUCTS</h3>
        <p className="text-[#737373] w-60 text-center">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      {images.map((image) => (
        <div key={image.id} className="flex flex-col items-center gap-2">
          <img src={image.src} alt={image.alt} />
          <div className="flex flex-col gap-1 items-center">
            <h5 className="font-bold">Graphic Design</h5>
            <h6 className="text-[#737373]">English Department</h6>
            <div className="flex gap-2">
              <h5 className="text-[#737373] font-bold">$16.48</h5>
              <h5 className="text-[#23856D] font-bold">$6.48</h5>
            </div>
            <div className="flex gap-2">
              <button className="bg-[#23A6F0] rounded-full w-4 h-4"></button>
              <button className="bg-[#23856D] rounded-full w-4 h-4"></button>
              <button className="bg-[#E77C40] rounded-full w-4 h-4"></button>
              <button className="bg-[#252B42] rounded-full w-4 h-4"></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BestProductList;
