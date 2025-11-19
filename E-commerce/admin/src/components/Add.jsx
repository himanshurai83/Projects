import React from "react";
import logo from "../assets/logo-1.jpg";
import { useState } from "react";
import { useContext } from "react";
import { adminDataContext } from "../context/AdminContext";
import { useNavigate } from "react-router";

function Add() {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("Men");
  const [productSubcategory, setProductSubcategory] = useState("Top-wear");
  const [bestseller, setBestseller] = useState(false);
  const [productSize, setProductSize] = useState([]);

  const navigate = useNavigate();

  const { addingProduct } = useContext(adminDataContext);
  const handleAddProduct = (e) => {
    e.preventDefault();
    console.log("Image 1:", image1);
    console.log("Image 2:", image2);
    console.log("Image 3:", image3);
    console.log("Image 4:", image4);
    console.log("Product Name:", productName);
    console.log("Product Description:", productDescription);
    console.log("Product Price:", productPrice);
    console.log("Product Category:", productCategory);
    console.log("Product Subcategory:", productSubcategory);
    console.log("Bestseller:", bestseller);
    console.log("Product Sizes:", productSize);

    const formData = new FormData();
    formData.append("name", productName);
    formData.append("description", productDescription);
    formData.append("price", productPrice);
    formData.append("category", productCategory);
    formData.append("subcategory", productSubcategory);
    formData.append("bestseller", bestseller);
    formData.append("sizes", JSON.stringify(productSize));

    formData.append("image1", image1);
    formData.append("image2", image2);
    formData.append("image3", image3);
    formData.append("image4", image4);
    addingProduct(formData);
    navigate("/");
  };

  return (
    <>
      <form
        className="max-w-4xl mx-auto relative left-[30px] mb-[40px] p-6 rounded-xl shadow-2xl mt-8 "
        onSubmit={(e) => handleAddProduct(e)}
        method="POST"
      >
        <h1 className="text-center mb-3 font-bold text-2xl">Adding page</h1>
        {/* Image Upload Section */}
        <div className="border border-gray-200 rounded-lg p-4 mb-6">
          <p className="font-semibold text-lg mb-4 text-center">
            Upload Images
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <label
              htmlFor="product-img1"
              className="flex flex-col items-center"
            >
              <img
                src={image1 ? URL.createObjectURL(image1) : logo}
                alt="Preview"
                className="w-24 h-24 object-cover border-2 border-gray-200 rounded-lg p-1 hover:ring-2 hover:ring-indigo-500 transition"
              />
              <span className="mt-2 text-sm text-gray-600">Image 1</span>
              <input
                type="file"
                name="product-img1"
                id="product-img1"
                className="hidden"
                onChange={(e) => setImage1(e.target.files[0])}
              />
            </label>

            <label
              htmlFor="product-img2"
              className="flex flex-col items-center"
            >
              <img
                src={image2 ? URL.createObjectURL(image2) : logo}
                alt="Preview"
                className="w-24 h-24 object-cover border-2 border-gray-200 rounded-lg p-1 hover:ring-2 hover:ring-indigo-500 transition"
              />
              <span className="mt-2 text-sm text-gray-600">Image 2</span>
              <input
                type="file"
                name="product-img2"
                id="product-img2"
                className="hidden"
                onChange={(e) => setImage2(e.target.files[0])}
              />
            </label>

            <label
              htmlFor="product-img3"
              className="flex flex-col items-center"
            >
              <img
                src={image3 ? URL.createObjectURL(image3) : logo}
                alt="Preview"
                className="w-24 h-24 object-cover border-2 border-gray-200 rounded-lg p-1 hover:ring-2 hover:ring-indigo-500 transition"
              />
              <span className="mt-2 text-sm text-gray-600">Image 3</span>
              <input
                type="file"
                name="product-img3"
                id="product-img3"
                className="hidden"
                onChange={(e) => setImage3(e.target.files[0])}
              />
            </label>

            <label
              htmlFor="product-img4"
              className="flex flex-col items-center"
            >
              <img
                src={image4 ? URL.createObjectURL(image4) : logo}
                alt="Preview"
                className="w-24 h-24 object-cover border-2 border-gray-200 rounded-lg p-1 hover:ring-2 hover:ring-indigo-500 transition"
              />
              <span className="mt-2 text-sm text-gray-600">Image 4</span>
              <input
                type="file"
                name="product-img4"
                id="product-img4"
                className="hidden"
                onChange={(e) => setImage4(e.target.files[0])}
              />
            </label>
          </div>
        </div>

        {/* Product Name */}
        <div className="mb-6">
          <p className="font-semibold text-lg mb-2">Product Name</p>
          <input
            type="text"
            placeholder="Product Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="font-semibold text-lg mb-2">Product Description</p>
          <textarea
            rows={4}
            placeholder="Enter the product description here!"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>

        {/* Price & Category Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="font-semibold text-lg mb-2">Product Price</p>
            <input
              type="text"
              placeholder="Rs.2000"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>

          <div>
            <p className="font-semibold text-lg mb-2">Category</p>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
              onChange={(e) => setProductCategory(e.target.value)}
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
        </div>

        {/* Sub-Category & Bestseller */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="font-semibold text-lg mb-2">Sub-Category</p>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
              onChange={(e) => setProductSubcategory(e.target.value)}
            >
              <option value="Top-wear">Top-wear</option>
              <option value="Bottom-wear">Bottom-wear</option>
              <option value="Winter-wear">Winter-wear</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="bestseller"
              className="h-5 w-5 text-indigo-600 focus:ring-indigo-500"
              onChange={(e) => setBestseller((prev) => !prev)}
            />
            <label htmlFor="bestseller" className="font-medium">
              Bestseller
            </label>
          </div>
        </div>

        <div>
          <p className="font-semibold text-lg mb-2">Product Size</p>
          <div className="flex gap-[10px]">
            <p
              className={`px-3 py-2 bg-gray-200 rounded-lg  cursor-pointer transition ${
                productSize.includes("S") ? "bg-indigo-500 text-white" : ""
              }`}
              onClick={(e) =>
                setProductSize((prev) =>
                  prev.includes("S")
                    ? prev.filter((item) => item !== "S")
                    : [...prev, "S"]
                )
              }
            >
              S
            </p>
            <p
              className={`px-3 py-2 bg-gray-200 rounded-lg  cursor-pointer transition ${
                productSize.includes("M") ? "bg-indigo-500 text-white" : ""
              }`}
              onClick={(e) =>
                setProductSize((prev) =>
                  prev.includes("M")
                    ? prev.filter((item) => item !== "M")
                    : [...prev, "M"]
                )
              }
            >
              M
            </p>
            <p
              className={`px-3 py-2 bg-gray-200 rounded-lg  cursor-pointer transition ${
                productSize.includes("L") ? "bg-indigo-500 text-white" : ""
              }`}
              onClick={(e) =>
                setProductSize((prev) =>
                  prev.includes("L")
                    ? prev.filter((item) => item !== "L")
                    : [...prev, "L"]
                )
              }
            >
              L
            </p>
            <p
              className={`px-3 py-2 bg-gray-200 rounded-lg  cursor-pointer transition ${
                productSize.includes("XL") ? "bg-indigo-500 text-white" : ""
              }`}
              onClick={(e) =>
                setProductSize((prev) =>
                  prev.includes("XL")
                    ? prev.filter((item) => item !== "XL")
                    : [...prev, "XL"]
                )
              }
            >
              XL
            </p>
            <p
              className={`px-3 py-2 bg-gray-200 rounded-lg cursor-pointer transition ${
                productSize.includes("XXL") ? "bg-indigo-500 text-white" : ""
              }`}
              onClick={(e) =>
                setProductSize((prev) =>
                  prev.includes("XXL")
                    ? prev.filter((item) => item !== "XXL")
                    : [...prev, "XXL"]
                )
              }
            >
              XXL
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-green-600 text-white font-semibold text-lg rounded-lg 
             hover:bg-green-700 transition duration-200 ease-in-out 
             focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 
             shadow-md hover:shadow-lg mt-2"
        >
          Add Product
        </button>
      </form>
    </>
  );
}

export default Add;
