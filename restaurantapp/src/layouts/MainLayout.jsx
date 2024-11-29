import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedMenuSlider from "../components/FeaturedMenuSlider.jsx";

const MainLayout = () => {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <FeaturedMenuSlider />
    </div>
  );
};

export default MainLayout;
