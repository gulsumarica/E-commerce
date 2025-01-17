import React, { useEffect } from "react";
import feather from "feather-icons";

function Slider() {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <div className=" sm:hidden bg-[url('/img/shop-hero-1-product-slide-1.png')] bg-center h-svh bg-cover text-white flex flex-col items-center justify-center gap-16 mx-0">
      <h5 className="font-bold ">SUMMER 2020</h5>
      <div className="flex flex-col items-center gap-8">
        <h1 className="sm:hidden text-3xl font-bold w-44 text-center">
          NEW COLLECTION
        </h1>
        <div className="flex justify-between w-screen ">
          <button>
            <i data-feather="chevron-left" className="text-4xl"></i>
          </button>
          <button>
            <i data-feather="chevron-right" className="text-4xl"></i>
          </button>
        </div>
        <h4 className="w-auto">
          We know how large objects will act, but things on a small scale.
        </h4>
      </div>
      <button className="bg-[#2DC071] px-8 py-4">SHOP NOW</button>
    </div>
  );
}

export default Slider;
