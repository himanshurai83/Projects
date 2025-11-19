import React from "react";

function HeroSection({ heroData }) {
  return (
    <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
      <p className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg animate-fadeIn">
        {heroData.text1}
      </p>
      <p className="text-white text-lg md:text-2xl font-medium drop-shadow-lg mt-2 animate-fadeIn delay-200">
        {heroData.text2}
      </p>
    </div>
  );
}

export default HeroSection;
