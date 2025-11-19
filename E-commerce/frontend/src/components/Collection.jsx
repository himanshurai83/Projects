import React, { useContext, useEffect, useState } from "react";
import { userDataContext } from "../contexts/UserContent";
import { FcViewDetails } from "react-icons/fc";
import { useNavigate } from "react-router";

function Collection() {
  const { product, gettingIndividualProduct, search } =
    useContext(userDataContext);
  const [filterProduct, setFilterProduct] = useState([]);
  const navigate = useNavigate();

  const handleCategory = (e) => {
    const filter = product.filter((item) => item.category === e.target.value);
    setFilterProduct(filter);
    if (e.target.value === "All") {
      setFilterProduct(product);
    }
  };
  const handleSubcategory = (e) => {
    const filter = product.filter(
      (item) => item.subcategory === e.target.value
    );
    setFilterProduct(filter);
    if (e.target.value === "All") {
      setFilterProduct(product);
    }
  };

  // console.log("search:", search);
  const resultProduct = () => {
    const result = product.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilterProduct(result);
  };

  useEffect(() => {
    setFilterProduct(product);
    resultProduct();
  }, [product, search]);

  const handleProductDetail = (productId) => {
    gettingIndividualProduct(productId);
  };
  return (
    <div className="flex">
      <div className="border border-gray-200 rounded-xl w-[40%] p-4 m-1 shadow-sm">
        <div className="p-2 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Category</h2>
          <div className="space-y-3">
            <label
              htmlFor="all"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <input
                type="radio"
                id="all"
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                value={"All"}
                name="category"
                onChange={handleCategory}
              />
              <span className="text-gray-700">All</span>
            </label>

            <label
              htmlFor="mens"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <input
                type="radio"
                id="mens"
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                value={"Men"}
                name="category"
                onChange={handleCategory}
              />
              <span className="text-gray-700">Mens</span>
            </label>
            <label
              htmlFor="women"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <input
                type="radio"
                id="women"
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                value={"Women"}
                name="category"
                onChange={handleCategory}
              />
              <span className="text-gray-700">Women</span>
            </label>
            <label
              htmlFor="kids"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <input
                type="radio"
                id="kids"
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                value={"Kids"}
                name="category"
                onChange={handleCategory}
              />
              <span className="text-gray-700">Kids</span>
            </label>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Subcategory</h2>
          <div className="space-y-3 mt-3">
            <label
              htmlFor="topwear"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <input
                type="radio"
                id="topwear"
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                onChange={handleSubcategory}
                name="category"
                value={"Top-wear"}
              />
              <span className="text-gray-700">Top-wear</span>
            </label>
            <label
              htmlFor="bottomwear"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <input
                type="radio"
                id="bottomwear"
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                onChange={handleSubcategory}
                name="category"
                value={"Bottom-wear"}
              />

              <span className="text-gray-700">Bottom-wear</span>
            </label>
            <label
              htmlFor="winterwear"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <input
                type="radio"
                id="winterwear"
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                onChange={handleSubcategory}
                name="category"
                value={"Winter-wear"}
              />

              <span className="text-gray-700">Winter-wear</span>
            </label>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Header */}

        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Our Collections
            </h1>
            <p className="text-sm text-gray-500">Discover our curated picks</p>
          </div>
          <p className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
            {filterProduct.length} items
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filterProduct.map((item, idx) => {
            return (
              <div
                key={idx}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-md ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:ring-indigo-200/70"
                onClick={() => {
                  handleProductDetail(item._id);
                  navigate(`/product/${item._id}`);
                }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 p-2">
                  <img
                    src={item.image1}
                    alt={item.name}
                    className="h-full object-contain w-full transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Body */}
                <div className="flex flex-col gap-4 p-4">
                  {/* Title + Price */}
                  <div className="flex items-start justify-between">
                    <p className="truncate text-lg font-semibold tracking-tight text-gray-900">
                      {item.name.toUpperCase()}
                    </p>
                    <p className="ml-2 shrink-0 rounded-md bg-emerald-100 px-2.5 py-1 text-sm font-bold text-emerald-700 shadow-sm">
                      ₹{item.price}
                    </p>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50/90 px-2.5 py-0.5 text-xs font-medium text-indigo-700">
                      {item.category}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
                      {item.subcategory}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Collection;
