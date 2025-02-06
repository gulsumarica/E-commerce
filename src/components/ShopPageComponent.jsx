import React, { useEffect } from "react";
import CardCover1 from "../../public/img/card-cover-1.jpg";
import CardCover2 from "../../public/img/card-cover-2.jpg";
import CardCover3 from "../../public/img/card-cover-3.jpg";
import CardCover4 from "../../public/img/card-cover-4.jpg";
import CardCover5 from "../../public/img/card-cover-5.jpg";
import feather from "feather-icons";

function ShopPageComponent() {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex flex-col justify-around h-[150px] items-center md:flex md:flex-row md:justify-between md:px-24 md:items-center">
        <h2 className="font-bold md:text-2xl">Shop</h2>
        <div className="flex flex-row items-center">
          <a href="/HomePage" className="font-medium">
            Home
          </a>
          <i data-feather="chevron-right" className="stroke-[#BDBDBD]"></i>
          <h6 className="text-[#737373] font-medium">Shop</h6>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {[CardCover1, CardCover2, CardCover3, CardCover4, CardCover5].map(
          (imgSrc, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center w-60 h-60"
            >
              <img
                src={imgSrc}
                alt="card cover"
                className="w-full h-full object-cover"
              />

              <div className="absolute flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-40 text-white">
                <h6 className="text-lg font-bold">CLOTHES</h6>
                <h6 className="text-sm">5 Items</h6>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default ShopPageComponent;
