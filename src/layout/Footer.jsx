import React, { useEffect } from "react";
import feather from "feather-icons";

function Footer() {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <div>
      <div className="bg-[#FAFAFA] flex flex-col items-start gap-2 px-28 py-8 w-full">
        <h1 className="font-bold text-3xl">Bandage</h1>
        <div className="flex items-center gap-2">
          <i data-feather="facebook" className="stroke-[#23A6F0] w-6 h-6"></i>
          <i data-feather="instagram" className="stroke-[#23A6F0] w-6 h-6"></i>
          <i data-feather="twitter" className="stroke-[#23A6F0] w-6 h-6"></i>
        </div>
      </div>
      <div className="flex flex-col items-start gap-6 px-28 py-8">
        <div>
          <h4 className="font-bold mb-2">Company Info</h4>
          <nav className="flex flex-col items-start gap-2">
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
          <nav className="flex flex-col items-start gap-2">
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
          <nav className="flex flex-col items-start gap-2">
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
          <nav className="flex flex-col items-start gap-2">
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
      </div>
      <div className="flex flex-col items-start gap-6 p-8 px-28 py-8">
        <h5 className="font-bold">Get In Touch</h5>
        <div>
          <input
            type="text"
            placeholder="Your Email"
            className="border-solid border-[#E6E6E6] bg-[#F9F9F9] border-2 h-11 rounded-sm"
          />
          <button className="bg-[#23A6F0] border-solid border-[#23A6F0] border-2 text-white px-6 py-2 rounded-sm">
            Subscribe
          </button>
          <p className="text-[#737373] text-xs">Lore imp sum dolor Amit</p>
        </div>
      </div>
      <div className="bg-[#FAFAFA] flex justify-center">
        <p className="text-[#737373] p-4 w-56 text-center">
          Made With Love By Finland All Right Reserved{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
