import React from "react";
import img1 from "../assets/girl 23.jpg";
import img2 from "../assets/pantwoman2.jpg";
import img3 from "../assets/pantman4.jpg";
import img4 from "../assets/t-shirtman1.jpg";

function Background({ heroCount }) {
  const images = [img1, img2, img3, img4];

  return (
    <div className="absolute inset-0 w-full h-full">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`slide-${idx}`}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
            heroCount === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
}

export default Background;
