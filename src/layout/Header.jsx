import React, { useEffect, useState } from "react";
import feather from "feather-icons";
import Information from "../components/Information";
import { Link } from "react-router-dom";

function Header() {
  useEffect(() => {
    feather.replace();
  }, []);

  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderNavItems = () => (
    <>
      <Link to="/home" className="font-medium text-[#737373]">
        Home
      </Link>
      <div
        className="relative"
        onMouseEnter={() => setIsShopOpen(true)}
        onMouseLeave={() => setIsShopOpen(false)}
      >
        <Link
          to="/shop"
          className="font-medium flex text-[#737373] items-center"
        >
          Shop <i data-feather="chevron-down"></i>
        </Link>
        {isShopOpen && (
          <div className="absolute flex justify-between z-10 m-4 p-4 w-60 bg-white shadow-lg">
            <div className="flex flex-col items-start gap-2">
              <a href="#">Kadın</a>
              <a href="#" className="text-[#737373] text-sm">
                Bags
              </a>
              <a href="#" className="text-[#737373] text-sm">
                Belts
              </a>
              <a href="#" className="text-[#737373] text-sm">
                Cosmetics
              </a>
              <a href="#" className="text-[#737373] text-sm">
                Hats
              </a>
            </div>
            <div className="flex flex-col items-start gap-2">
              <a href="#">Erkek</a>
              <a href="#" className="text-[#737373] text-sm">
                Bags
              </a>
              <a href="#" className="text-[#737373] text-sm">
                Belts
              </a>
              <a href="#" className="text-[#737373] text-sm">
                Cosmetics
              </a>
              <a href="#" className="text-[#737373] text-sm">
                Hats
              </a>
            </div>
          </div>
        )}
      </div>
      <Link to="#" className="font-medium text-[#737373]">
        About
      </Link>
      <Link to="#" className="font-medium text-[#737373]">
        Blog
      </Link>
      <Link to="#" className="font-medium text-[#737373]">
        Contact
      </Link>
      <Link to="#" className="font-medium text-[#737373]">
        Pages
      </Link>
    </>
  );

  return (
    <>
      <Information />
      <header className="flex gap-4 m-4 items-center justify-around flex-col">
        {/* Masaüstü Header */}
        <div className="hidden md:flex items-center justify-between w-full h-full p-4">
          <h1 className="font-bold text-xl">Bandage</h1>
          <nav className="flex items-center text-center gap-4">
            {renderNavItems()}
          </nav>
          <div className="flex items-center gap-4 text-sm">
            <i
              data-feather="user"
              aria-label="User"
              className="stroke-[#23A6F0] w-5 h-5"
            ></i>
            <h2 className="text-[#23A6F0]">Login / Register</h2>
            <i
              data-feather="search"
              aria-label="Search"
              className="stroke-[#23A6F0] w-5 h-5"
            ></i>
            <i
              data-feather="shopping-cart"
              aria-label="Shopping-cart"
              className="stroke-[#23A6F0] w-5 h-5"
            ></i>
            <i
              data-feather="heart"
              aria-label="Heart"
              className="stroke-[#23A6F0] w-5 h-5"
            ></i>
          </div>
        </div>

        {/* Mobil Header */}
        <div className="md:hidden flex flex-row items-center justify-between w-full">
          <h1 className="font-bold text-xl">Bandage</h1>
          <button>
            <div
              className="relative"
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              <i data-feather="menu"></i>
              {isMenuOpen && (
                <nav className="absolute transform w-full flex flex-col items-center text-center gap-4">
                  {renderNavItems()}
                </nav>
              )}
            </div>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
