import React from "react";
import heroImage from "../../assets/images/hero.jpg";

function Hero() {
  return (
    <>
      {/* hero section starts */}
      <section
        className="relative overflow-hidden min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute bg-black opacity-50 w-full h-full"></div>
        <h1 className="text-white relative z-30">hello</h1>
      </section>

      {/* hero section ends */}
    </>
  );
}

export default Hero;
