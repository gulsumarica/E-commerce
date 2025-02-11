import React from "react";
import Header from "./Header";
import Hero from "../components/hero";
import Footer from "./Footer";
import ProductCard from "../components/ProductCard";
import ProductSlider from "../components/ProductSlider";
import HomeContainer from "../components/HomeContainer";
import Blog from "../components/Blog";

function PageContent() {
  return (
    <>
      <Hero />
      <ProductCard />
      <ProductSlider />
      <HomeContainer />
      <Blog />
    </>
  );
}

export default PageContent;
