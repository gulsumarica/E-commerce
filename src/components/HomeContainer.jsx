import React from "react";

function HomeContainer() {
  return (
    <div className="flex flex-col items-center gap-1 mt-20 w-full h-screen justify-between">
      <div className="flex flex-col gap-8 items-center ">
        <h5 className="text-[#BDBDBD]">SUMMER 2020</h5>
        <h1 className="font-bold w-28 text-center">
          Part of the Neural Universe
        </h1>
        <h4 className="text-[#737373] w-40 text-center">
          We know how large objects will act, but things on a small scale.
        </h4>
      </div>
      <div className="flex flex-col items-center gap-4">
        <button className="bg-[#23A6F0] text-white px-8 py-4 rounded-md">
          BUY NOW
        </button>
        <button className="text-[#23A6F0] border-2 border-solid border-[#23A6F0] rounded-md px-8 py-4">
          Learn More
        </button>
      </div>
      <img src="/img/HomeContainer.png" alt="" />
    </div>
  );
}

export default HomeContainer;
