import React from "react";

function ShopCard() {
  return (
    <div className="flex flex-col items-center gap-2 ">
      <div className="flex flex-col items-center m-4">
        <h2 className="font-bold text-3xl">EDITOR'S PICK</h2>
        <p className="text-[#737373] w-52 font-thin text-center">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="bg-[url('/img/men.png')] w-11/12 h-96 bg-top flex items-end">
          <button className="bg-white text-3xl font-medium px-16 py-4 m-8">
            MEN
          </button>
        </div>
        <div className="bg-[url('/img/women.png')] w-11/12 h-96 bg-cover bg-top flex items-end">
          <button className="bg-white text-3xl px-8 py-4 m-8 font-medium">
            WOMEN
          </button>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="bg-[url('/img/accessories.png')] w-11/12 h-40 bg-cover bg-center flex items-end ">
            <button className="bg-white font-medium text-2xl px-4 py-2 m-4">
              ACCESSORIES
            </button>
          </div>
          <div className="bg-[url('/img/kids.png')] w-11/12 h-40 bg-cover bg-center flex items-end">
            <button className="bg-white text-3xl px-16 py-4 m-8 font-medium">
              KIDS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
