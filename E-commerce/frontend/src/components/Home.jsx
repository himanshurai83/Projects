import React, { useState, useEffect } from "react";
import { userDataContext } from "../contexts/UserContent";
import Background from "./Background";
import HeroSection from "./HeroSection";
import LatestCollection from "./LatestCollection";
import Bestseller from "./Bestseller.jsx";

function Home() {
  const [heroCount, setHeroCount] = useState(0);

  const heroData = [
    {
      text1: "This is text1 of first img",
      text2: "This is text2 of first img",
    },
    {
      text1: "This is text1 of second img",
      text2: "This is text2 of second img",
    },
    {
      text1: "This is text1 of third img",
      text2: "This is text2 of third img",
    },
    {
      text1: "This is text1 of fourth img",
      text2: "This is text2 of fourth img",
    },
  ];

  useEffect(() => {
    const interval = setTimeout(() => {
      setHeroCount((prev) => (prev === heroData.length - 1 ? 0 : prev + 1));
    }, 4000); // change slide every 4s
    return () => clearTimeout(interval);
  }, [heroCount]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        {/* Background image handler */}
        <Background heroCount={heroCount} />

        {/* Text overlay */}
        <HeroSection heroData={heroData[heroCount]} />

        {/* Indicators */}
        <div className="absolute bottom-6 flex gap-2 justify-center w-full z-20">
          {heroData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setHeroCount(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                heroCount === idx ? "bg-white scale-110" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Collections */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <LatestCollection />
      </section>

      {/* Bestseller */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <Bestseller />
      </section>
    </div>
  );
}

export default Home;
