import React, { useContext, useEffect, useState } from "react";
import { userDataContext } from "../contexts/UserContent";
import { useNavigate } from "react-router";

function Cart() {
  const { cart, removingProductFromCart, updatingCart } =
    useContext(userDataContext);
  const navigate = useNavigate();
  // console.log("cart", cart);
  const handleIncrementQuantity = (productId) => {
    let task = "increment";
    updatingCart(productId, task);
  };

  const handleDecrementQuantity = (productId) => {
    let task = "decrement";
    updatingCart(productId, task);
  };

  const handleRemoveFromCart = (productId) => {
    removingProductFromCart(productId);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {cart?.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-wrap md:flex-nowrap items-center gap-8 p-6 mb-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-transform duration-200 hover:-translate-y-1"
        >
          {/* Product Image */}
          <div className="flex-shrink-0 w-28 h-28 rounded-xl overflow-hidden shadow-md">
            <img
              src={item._doc.image1}
              alt={item._doc.name}
              className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800">
              {item._doc.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {item._doc.category} • {item._doc.subcategory}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Size : {item.size && item.size}
            </p>
          </div>

          {/* Price & Quantity Controls */}
          <div className="text-right flex flex-col items-center">
            <p className="text-lg font-bold text-gray-900">
              ₹{item._doc.price * item.quantity}
            </p>
            <div className="mt-3 flex items-center gap-3">
              <button
                onClick={() => handleDecrementQuantity(item._doc._id)}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 active:scale-90 transition cursor-pointer"
              >
                −
              </button>
              <span className="w-8 text-center font-semibold text-gray-800">
                {item.quantity}
              </span>
              <button
                onClick={() => handleIncrementQuantity(item._doc._id)}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 active:scale-90 transition cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex-shrink-0 flex flex-col gap-2">
            <button
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl shadow-md hover:from-blue-700 hover:to-indigo-700 active:scale-95 transition cursor-pointer"
              onClick={() => {
                navigate(`/place-order/${item._doc._id}`);
              }}
            >
              Place Order
            </button>
            <button
              onClick={() => handleRemoveFromCart(item._doc._id)}
              className="px-5 py-2.5 bg-red-100 text-red-600 font-medium rounded-xl border border-red-200 hover:bg-red-200 hover:text-red-700 active:scale-95 transition cursor-pointer"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
