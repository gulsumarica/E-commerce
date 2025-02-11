import React from "react";

function Detail() {
  return (
    <div className="flex flex-col w-full items-start gap-4 p-4">
      <h4 className="font-medium mt-4">Product Name</h4>
      <div className="flex flex-row items-center justify-around gap-2">
        <div className="flex flex-row">
          <i
            data-feather="star"
            className="stroke-yellow-300 fill-yellow-300"
          ></i>
          <i
            data-feather="star"
            className="stroke-yellow-300 fill-yellow-300"
          ></i>
          <i
            data-feather="star"
            className="stroke-yellow-300 fill-yellow-300"
          ></i>
          <i
            data-feather="star"
            className="stroke-yellow-300 fill-yellow-300"
          ></i>
          <i data-feather="star" className="stroke-yellow-300"></i>
        </div>
        <h6 className="text-sm text-[#737373]">10 Reviews</h6>
      </div>
      <h5 className="font-bold text-xl">$1,139.33</h5>
      <div className="flex flex-row gap-2">
        <h6 className="text-[#737373]">Availability :</h6>
        <h6 className="text-[#23A6F0]">In Stock</h6>
      </div>
      <p className="text-[#858585] border-b m-1 md:w-80">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent door ENIM RELIT Mollie. Excitation venial
        consequent sent nostrum met.
      </p>
      <div className="flex flex-row gap-2">
        <button className="rounded-full w-6 h-6 bg-[#23A6F0]"></button>
        <button className="rounded-full w-6 h-6 bg-[#2DC071]"></button>
        <button className="rounded-full w-6 h-6 bg-[#E77C40]"></button>
        <button className="rounded-full w-6 h-6 bg-[#252B42]"></button>
      </div>
      <div className="flex flex-row items-center gap-2 py-4">
        <button className="rounded-md w-32 h-12 bg-[#23A6F0] text-white font-normal">
          Select Options
        </button>
        <button className="rounded-full border w-10 h-10 flex items-center justify-center">
          <i
            data-feather="heart"
            className="w-6 h-6 pr-0"
            style={{ strokeWidth: 1 }}
          ></i>
        </button>
        <button className="rounded-full border w-10 h-10 flex items-center justify-center">
          <i
            data-feather="shopping-cart"
            className="w-6 h-6"
            style={{ strokeWidth: 1 }}
          ></i>
        </button>
        <button className="rounded-full border w-10 h-10 flex items-center justify-center ">
          <i
            data-feather="eye"
            className="w-6 h-6"
            style={{ strokeWidth: 1 }}
          ></i>
        </button>
      </div>
    </div>
  );
}

export default Detail;
