import React, { useEffect } from "react";
import feather from "feather-icons";

function ProductSlider() {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <div className="bg-[#23856D] h-svh flex flex-col justify-between text-white gap-4">
      <div className=" flex flex-col items-center mt-16 gap-8">
        <h5>SUMMER 2020</h5>
        <h1 className="sm:hidden text-3xl font-bold w-44 text-center">
          Vita Classic Product
        </h1>
        <h4 className="w-auto">
          We know how large objects will act, but things on a small scale.
        </h4>
      </div>
      <div className="flex items-center justify-between">
        <button>
          <i data-feather="chevron-left" className="text-4xl"></i>
        </button>
        <div className="flex flex-col items-center gap-4">
          <h5 className="font-bold">$16.48</h5>
          <button className="bg-[#2DC071] px-8 py-4 rounded-md text-xs">
            ADD TO CARD
          </button>
        </div>
        <button>
          <i data-feather="chevron-right" className="text-4xl"></i>
        </button>
      </div>
      <div className="overflow-hidden rounded-md">
        <img
          src="/img/product-slider1.png"
          alt=""
          className=" h-full object-contain mr-4"
        />
      </div>
    </div>
  );
}

export default ProductSlider;
