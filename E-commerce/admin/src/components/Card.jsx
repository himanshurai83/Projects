import React from "react";

import { ImBin } from "react-icons/im";
function Card({ product, handleRemoveProduct }) {
  return (
    <>
      <div className="max-w-4xl ml-0 mb-[40px] p-2 rounded-xl mt-3">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 underline">
            Products
          </h1>
          <p className="text-sm font-semibold text-white mt-1 p-2 bg-[gray] rounded-xl">
            {product?.length
              ? `${product.length} item${product.length > 1 ? "s" : ""}`
              : "No items"}
          </p>
        </div>
      </div>
      {product?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.map((item, idx) => {
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all hover:shadow-xl"
              >
                <img
                  src={item.image1}
                  alt=""
                  className="w-full object-contain p-2 aspect-[4/3] transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name || "Untitled product"}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        {item.category && (
                          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-100">
                            {item.category}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      {item.price !== undefined && item.price !== null && (
                        <div className="text-xl font-bold text-emerald-600">
                          ${item.price}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Delete button (styled only) */}
                <div className="absolute top-3 right-3">
                  <button
                    aria-label="Delete product"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600 ring-1 ring-inset ring-red-100 transition hover:bg-red-100 hover:text-red-700 cursor-pointer"
                    onClick={() => handleRemoveProduct(item._id)}
                  >
                    <ImBin />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex h-48 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white text-gray-500">
          No Product available this time!
        </div>
      )}
    </>
  );
}

export default Card;
