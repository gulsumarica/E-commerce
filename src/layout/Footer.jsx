import React, { useEffect } from "react";
import feather from "feather-icons";

function Footer() {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <div className="flex flex-col items-center justify-around">
      <div className=" flex flex-col items-start justify-around p-16 w-full border-b md:flex-row md:justify-between md:px-36">
        <h1 className="font-bold text-3xl">Bandage</h1>
        <div className="flex items-center justify-center gap-2">
          <i data-feather="facebook" className="stroke-[#23A6F0] w-6 h-6"></i>
          <i data-feather="instagram" className="stroke-[#23A6F0] w-6 h-6"></i>
          <i data-feather="twitter" className="stroke-[#23A6F0] w-6 h-6"></i>
        </div>
      </div>
      <div className="flex flex-col items-start justify-around p-16 w-full mb-4 md:flex-row md:justify-around md:gap-0 md:items-center">
        <div>
          <h4 className="font-bold mb-2">Company Info</h4>
          <nav className="flex flex-col items-start gap-2 text-sm">
            <a href="" className="text-[#737373] font-medium">
              About Us
            </a>
            <a href="" className="text-[#737373] font-medium">
              Carrier
            </a>
            <a href="" className="text-[#737373] font-medium">
              We are hiring
            </a>
            <a href="" className="text-[#737373] font-medium">
              Blog
            </a>
          </nav>
        </div>
        <div>
          <h4 className="font-bold mb-2">Legal</h4>
          <nav className="flex flex-col items-start gap-2 text-sm">
            <a href="" className="text-[#737373] font-medium">
              About Us
            </a>
            <a href="" className="text-[#737373] font-medium">
              Carrier
            </a>
            <a href="" className="text-[#737373] font-medium">
              We are hiring
            </a>
            <a href="" className="text-[#737373] font-medium">
              Blog
            </a>
          </nav>
        </div>
        <div>
          <h4 className="font-bold mb-2">Features</h4>
          <nav className="flex flex-col items-start gap-2 text-sm">
            <a href="" className="text-[#737373] font-medium">
              Business Marketing
            </a>
            <a href="" className="text-[#737373] font-medium">
              User Analytic
            </a>
            <a href="" className="text-[#737373] font-medium">
              Live Chat
            </a>
            <a href="" className="text-[#737373] font-medium">
              Unlimited Support
            </a>
          </nav>
        </div>
        <div>
          <h4 className="font-bold mb-2">Resources</h4>
          <nav className="flex flex-col items-start gap-2 text-sm">
            <a href="" className="text-[#737373] font-medium">
              IOS & Android
            </a>
            <a href="" className="text-[#737373] font-medium">
              Watch a Demo
            </a>
            <a href="" className="text-[#737373] font-medium">
              Customers
            </a>
            <a href="" className="text-[#737373] font-medium">
              API
            </a>
          </nav>
        </div>
        <div className="flex flex-col items-start p-8 ">
          <h5 className="font-bold mb-8">Get In Touch</h5>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Your Email"
              className="border-solid border-[#E6E6E6] bg-[#F9F9F9] border-2 h-11  rounded-sm text-sm pl-2"
            />
            <button className="bg-[#23A6F0] border-solid border-[#23A6F0] border-2 text-white px-3 py-2 rounded-sm">
              Subscribe
            </button>
          </div>
          <p className="text-[#737373] text-xs">Lore imp sum dolor Amit</p>
        </div>
      </div>
      <div className="bg-[#FAFAFA] flex flex-row justify-center w-full">
        <p className="text-[#737373] p-4 w-56 text-center md:w-full ">
          Made With Love By Finland All Right Reserved{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
