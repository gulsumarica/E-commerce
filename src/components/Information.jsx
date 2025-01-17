import React, { useEffect } from "react";
import feather from "feather-icons";

function Information() {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <div className="hidden lg:flex bg-[#1D3557] text-white flex justify-around gap-4 items-center h-12">
      <div className="flex gap-2">
        <i data-feather="phone"></i>
        <h6>(225) 555-0118</h6>
      </div>
      <div className="flex gap-2">
        <i data-feather="mail"></i>
        <h6>michelle.rivera@example.com</h6>
      </div>
      <h6>Follow Us and get a chance to win 80% off</h6>
      <div className="flex gap-2">
        <h6>Follow us: </h6>
        <div className="flex gap-1">
          <i data-feather="instagram"></i>
          <i data-feather="youtube"></i>
          <i data-feather="facebook"></i>
          <i data-feather="twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default Information;
