import React, { useContext } from "react";
import { adminDataContext } from "../context/AdminContext";

function Order() {
  const { orderData, updatingOrderDetail } = useContext(adminDataContext);

  const handleStatus = (e, productId) => {
    updatingOrderDetail(productId, e.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Orders Dashboard
      </h1>

      {orderData?.map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 mb-6 border border-gray-100"
        >
          {/* Product + User Info */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
            <div className="flex items-center mb-4 md:mb-0">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-28 h-28 object-cover rounded-lg border border-gray-200 mr-5 shadow-sm"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {item.product.name.toUpperCase()}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Ordered By:{" "}
                  <span className="font-medium text-gray-800">
                    {item.userId}
                  </span>
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-lg font-bold text-blue-600">
                ₹{item.product.amount + 40}
              </p>
              <p className="text-xs text-gray-500">Incl. Delivery</p>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="mb-5">
            <h3 className="text-sm font-semibold text-gray-700 uppercase mb-2">
              Delivery Location
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm text-gray-700">
              <p className="mb-1 font-medium">
                {item.address.firstName} {item.address.lastName}
              </p>
              <p className="mb-1">{item.address.address}</p>
              <p className="mb-1">{item.address.zipcode}</p>
              <p>
                {item.address.city}, {item.address.state}
              </p>
            </div>
          </div>

          {/* Status */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center pt-4 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700 uppercase mb-3 md:mb-0">
              Status
            </h3>
            <select
              name="status"
              value={item.status}
              onChange={(e) => handleStatus(e, item._id)}
              className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            >
              <option value="order-placed">Order-Placed</option>
              <option value="order-packed">Order-Packed</option>
              <option value="order-shipped">Order-Shipped</option>
              <option value="out-for-delivery">Out-For-Delivery</option>
              <option value="delivered">Delivered</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Order;
