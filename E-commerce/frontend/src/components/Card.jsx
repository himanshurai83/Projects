import React, { useContext } from "react";
import { userDataContext } from "../contexts/UserContent";
import { useNavigate } from "react-router";

function Card({ item }) {
  const navigate = useNavigate();
  const { gettingIndividualProduct } = useContext(userDataContext);
  const handleProductDetail = (productId) => {
    gettingIndividualProduct(productId);
  };
  return (
    <div
      className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] w-full sm:w-1/3 md:w-1/4 lg:w-1/5 mx-auto cursor-pointer"
      onClick={() => {
        handleProductDetail(item._id);
        navigate(`/product/${item._id}`);
      }}
    >
      {/* Gradient border using pseudo-element */}
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-70 blur-sm"></div>
      <div className="relative z-10 p-4">
        <div className="h-48 overflow-hidden rounded-t-xl">
          <img
            src={item.image1}
            alt=""
            className="w-full object-contain h-full transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="p-3 text-center">
          <p className="text-xl font-bold text-gray-800 tracking-wide">
            {item.name.toUpperCase()}
          </p>
          <p className="text-sm text-gray-700 text-opacity-90">
            {item.category}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
