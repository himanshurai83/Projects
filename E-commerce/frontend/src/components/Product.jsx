import React, { useContext, useEffect, useState } from "react";
import { userDataContext } from "../contexts/UserContent";
import { useNavigate } from "react-router";
import RelatedProduct from "./RelatedProduct";

function Product() {
  const { individualProduct, addingProductInCart } =
    useContext(userDataContext);
  const [imageUrl, setImageUrl] = useState(individualProduct.image1);
  const navigate = useNavigate();
  const [size, setSize] = useState("");

  console.log("size:", size);
  const handleImage = (e) => {
    // console.log(e.target.currentSrc);
    setImageUrl(e.target.currentSrc);
  };
  useEffect(() => {
    setImageUrl(individualProduct.image1);
  }, [individualProduct]);

  const handleAddProductInCart = (productId) => {
    // console.log("size:", size);
    addingProductInCart(productId, size);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center">
        <div className="w-full max-w-7xl bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-200">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Main Image */}
            <div className="flex items-center justify-center h-96 md:h-[50%]">
              <img
                src={imageUrl}
                alt={individualProduct.name}
                className="h-[75%] w-[75%] object-contain rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex overflow-x-auto md:justify-center gap-3 p-4 bg-white border-t border-gray-100">
              {[
                individualProduct.image1,
                individualProduct.image2,
                individualProduct.image3,
                individualProduct.image4,
              ].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-xl border border-gray-200 hover:border-blue-500 hover:scale-110 hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={handleImage}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 flex flex-col p-10 md:p-12 space-y-8 bg-gradient-to-br from-white to-gray-50 border-l border-gray-100">
            <div className="space-y-6">
              {/* Product Name */}
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Product Name : {individualProduct.name.toUpperCase()}
              </h1>

              {/* Description */}
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {individualProduct.description}
              </p>

              {/* Price + Details */}
              <div className="flex flex-col gap-4 pt-6 border-t border-gray-100 text-gray-800">
                <span className="text-2xl font-bold text-green-600 bg-green-50 px-6 py-2 rounded-xl shadow-sm border border-green-200 w-fit">
                  Price : ₹{individualProduct.price}
                </span>

                <span className="flex items-center text-base md:text-lg">
                  <span className="text-blue-500 mr-2">🏷</span>
                  Category : {individualProduct.category}
                </span>

                <span className="flex items-center text-base md:text-lg">
                  <span className="text-purple-500 mr-2">📂</span>
                  Subcategory : {individualProduct.subcategory}
                </span>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="flex items-center text-base md:text-lg">
                    <span className="text-yellow-500 mr-2">📏</span>
                    Sizes :
                  </span>
                  {individualProduct.sizes?.map((productSize, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium shadow-sm transition cursor-pointer ${
                        size === productSize ? "bg-[red]" : "bg-[green]"
                      }`}
                      onClick={() => setSize(productSize)}
                    >
                      {productSize}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button
                className="w-full py-4 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.03] active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer"
                onClick={() => {
                  handleAddProductInCart(individualProduct._id);
                  navigate("/cart");
                }}
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-50vh"></div>
      <RelatedProduct
        category={individualProduct.category}
        subcategory={individualProduct.subcategory}
        productId={individualProduct._id}
      />
    </>
  );
}

export default Product;
