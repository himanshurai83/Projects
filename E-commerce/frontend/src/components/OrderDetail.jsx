import React, { useContext } from "react";
import { userDataContext } from "../contexts/UserContent";
import Title from "./Title";
import { useNavigate } from "react-router";

function OrderDetail() {
  const navigate = useNavigate();
  const { orderData, gettingIndividualProduct, cancelingOrder } =
    useContext(userDataContext);

  const handleCancelOrder = (orderId) => {
    cancelingOrder(orderId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <Title text1={"MY"} text2={"ORDER"} />

      <div className="grid gap-6 mt-6">
        {orderData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md hover:shadow-xl rounded-2xl border border-gray-200 p-5 transition-all duration-300"
          >
            {/* Main Content */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Product Image */}
              <div
                className="flex-shrink-0 cursor-pointer"
                onClick={() => {
                  gettingIndividualProduct(item.product.id);
                  navigate(`/product/${item.product.id}`);
                }}
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-cover rounded-xl border border-gray-200 shadow-sm hover:scale-105 transition-transform"
                />
              </div>

              {/* Product Info & Address */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                    {item.product.name.toUpperCase()}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Quantity:{" "}
                    <span className="font-medium">{item.product.quantity}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Size:{" "}
                    <span className="font-medium">{item.product.size}</span>
                  </p>
                </div>

                {/* Shipping Info */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mt-4">
                  <h3 className="font-medium text-gray-700 mb-3">
                    Shipping Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                    <p className="font-medium">
                      {item.address.firstName} {item.address.lastName}
                    </p>
                    <p>{item.address.email}</p>
                    <p>{item.address.mobile}</p>
                    <p>{item.address.address}</p>
                    <p>
                      {item.address.city}, {item.address.state} -{" "}
                      {item.address.zipcode}
                    </p>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                  <div className="flex flex-col">
                    <span className="text-gray-500">Payment</span>
                    <span className="font-medium">{item.address.payment}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500">Amount</span>
                    <span className="text-green-600 font-bold">
                      ₹{item.product.amount + 40}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500">Date</span>
                    <span className="font-medium">
                      {new Date(item.date).toDateString()}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500">Status</span>
                    <span
                      className={`px-2 py-1 text-xs rounded-full text-center w-fit ${
                        item.status === "Delivered"
                          ? "bg-green-100 text-green-600"
                          : item.status === "Canceled"
                          ? "bg-red-100 text-red-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500">Transaction</span>
                    <span
                      className={`px-2 py-1 text-xs rounded-full w-fit ${
                        item.payment
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {item.payment ? "Completed" : "Incomplete"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 flex justify-end">
              {item.status === "Canceled" ? (
                <p className="text-red-600 font-medium">Order Canceled</p>
              ) : (
                <button
                  onClick={() => handleCancelOrder(item._id)}
                  className="px-4 py-2 text-sm md:text-base bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-all cursor-pointer"
                >
                  Cancel Order
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderDetail;
