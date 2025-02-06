import React from "react";
import Client1 from "../../public/img/Client1.png";
import Client2 from "../../public/img/Client2.png";
import Client3 from "../../public/img/Client3.png";
import Client4 from "../../public/img/Client4.png";
import Client5 from "../../public/img/Client5.png";
import Client6 from "../../public/img/Client6.png";

export default function Clients() {
  return (
    <div className="bg-[#FAFAFA] flex flex-col items-center justify-around gap-8 p-20 my-8 md:flex-row ">
      <img src={Client1} alt="vector" className="w-32 " />
      <img src={Client2} alt="vector" className="w-32" />
      <img src={Client3} alt="vector" className="w-32" />
      <img src={Client4} alt="vector" className="w-32" />
      <img src={Client5} alt="vector" className="w-32" />
      <img src={Client6} alt="vector" className="w-32" />
    </div>
  );
}
