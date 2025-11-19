import React from "react";

function Title({ text1, text2 }) {
  return (
    <div className="flex justify-center m-6">
      <div
        className="flex items-center gap-4 px-6 py-3 rounded-2xl font-bold text-2xl sm:text-3xl md:text-4xl 
                      bg-gradient-to-r from-blue-200 via-teal-200 to-blue-300 
                      text-gray-800 shadow-md hover:shadow-2xl 
                      transition-all duration-300 transform hover:scale-105"
      >
        <p className="tracking-wide">{text1}</p>
        <p className="tracking-wide text-blue-800">{text2}</p>
      </div>
    </div>
  );
}

export default Title;
