import React, { useEffect } from "react";
import feather from "feather-icons";

function Information() {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <div className=" hidden md:flex md:bg-[#1D3557] md:text-white md:justify-around md:items-center md:h-12">
      <div className="flex flex-row items-center justify-center gap-1">
        <i data-feather="phone" className="w-4 h-4"></i>
        <h6 className="font-thin">(225) 555-0118</h6>
      </div>
      <div className="flex flex-row items-center justify-center gap-1">
        <i data-feather="mail" className="w-4 h-4"></i>
        <h6 className="font-thin">michelle.rivera@example.com</h6>
      </div>
      <h6 className="font-thin">Follow Us and get a chance to win 80% off</h6>
      <div className="flex flex-row items-center justify-center gap-1">
        <h6 className="font-thin">Follow us: </h6>
        <div className="flex flex-row items-center justify-center gap-2 ">
          <i data-feather="instagram" className="w-4 h-4"></i>
          <i data-feather="youtube" className="w-4 h-4 "></i>
          <i data-feather="facebook" className="w-4 h-4"></i>
          <i data-feather="twitter" className="w-4 h-4"></i>
        </div>
      </div>
    </div>
  );
}

export default Information;
