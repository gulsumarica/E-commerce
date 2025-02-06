import React from "react";

function HomeContainer() {
  return (
    <div className="flex flex-col items-center  mt-20 w-full h-screen justify-between md:flex-row md:justify-center md:h-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 items-center md:items-start ">
          <h5 className="text-[#BDBDBD]">SUMMER 2020</h5>
          <h1 className="font-bold w-28 text-center md:w-full md:text-start">
            Part of the Neural Universe
          </h1>
          <h4 className="text-[#737373] w-40 text-center md:w-full">
            We know how large objects will act, but things on a small scale.
          </h4>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <button className="bg-[#23A6F0] text-white px-9 py-4 rounded-md md:bg-[#2DC071] md:py-2 md:rounded-sm">
            BUY NOW
          </button>
          <button className="text-[#23A6F0] border border-solid border-[#23A6F0] rounded-md px-8 py-4 md:text-[#2DC071] md:border-[#2DC071] md:py-2 md:rounded-sm">
            Learn More
          </button>
        </div>
      </div>
      <img src="/img/HomeContainer.png" alt="" />
    </div>
  );
}

export default HomeContainer;
