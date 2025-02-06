import React from "react";
import Slider from "./Slider";
import { style } from "@motionone/dom";
import img from "/img/shop-hero-1-product-slide-1.png";

function MainSlider() {
  const slides = [
    {
      title: "SUMMER 2020",
      subtitle: "NEW COLLECTION",
      p: "We know how large objects will act, but things on a small scale.",
      style: "",
    },
  ];
  return (
    <div className="bg-[url('/img/shop-hero-1-product-slide-1.png')] bg-center bg-contain md:bg-cover bg-no-repeat h-400px md:h-screen w-full">
      <Slider slides={slides} />
    </div>
  );
}

export default MainSlider;
