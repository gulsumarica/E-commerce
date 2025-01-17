import React, { useEffect } from "react";
import feather from "feather-icons";
import Information from "../components/Information";

function Header() {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <>
      <Information />
      <header className="flex gap-4 m-4 items-center justify-around flex-col">
        <div className="flex lg:hidden gap-4 m-4 items-center justify-around w-full">
          <h1 className="font-bold text-xl">Bandage</h1>
          <div className="flex  gap-1">
            <i data-feather="user"></i>
            <i data-feather="search"></i>
            <i data-feather="shopping-cart"></i>
            <i data-feather="menu"></i>
          </div>
        </div>
        <nav className="flex lg:hidden flex-col gap-2">
          <a href="" className="text-[#737373] text-xl font-thin">
            Home
          </a>
          <a href="" className="text-[#737373] text-xl">
            Product
          </a>
          <a href="" className="text-[#737373] text-xl">
            Pricing
          </a>
          <a href="" className="text-[#737373] text-xl">
            Contact
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header;
