import React, { useEffect } from "react";
import Slider from "./Slider";

function ProductSlider() {
  const slides = [
    {
      image: "/img/product-slider1.png",
      title: "SUMMER 2020",
      subtitle: "Vita Classic Product",
      p: "We know how large objects will act, but things on a small scale.",
    },
  ];
  return (
    <div className="bg-[#23856D] h-[400px]">
      <Slider slides={slides} />
    </div>
  );
}

export default ProductSlider;
