import React, { useContext, useRef, useState } from "react";
import Title from "./Title";
import { useNavigate, useParams } from "react-router";
import { userDataContext } from "../contexts/UserContent";

function PlaceOrder() {
  const { productId } = useParams();
  const { cart, placingOrder, initialAddress } = useContext(userDataContext);
  const navigate = useNavigate();

  console.log("address:", initialAddress.firstName);

  const filterProduct = cart.find((product) => {
    return product._doc._id.toString() === productId;
  });

  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const zipcodeRef = useRef("");
  const addressRef = useRef("");
  const stateRef = useRef("");
  const cityRef = useRef("");
  const paymentRef = useRef("");
  const mobileRef = useRef("");

  // ✅ State for personal details
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   zipcode: "",
  //   address: "",
  //   state: "",
  //   city: "",
  //   payment: "",
  //   mobile: "",
  // });

  const [error, setError] = useState("");

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  //   setError(""); // clear error while typing
  // };

  // const handleOrder = (e, filterProduct) => {
  //   if (
  //     !formData.firstName ||
  //     !formData.lastName ||
  //     !formData.email ||
  //     !formData.zipcode ||
  //     !formData.address ||
  //     !formData.state ||
  //     !formData.city ||
  //     !formData.payment ||
  //     !formData.mobile
  //   ) {
  //     setError("⚠️ Please fill all the details before placing order.");
  //     return;
  // }

  const productData = {
    id: filterProduct._doc._id,
    quantity: filterProduct.quantity,
    size: filterProduct.size,
    image: filterProduct._doc.image1,
    amount: filterProduct._doc.price * filterProduct.quantity,
    name: filterProduct._doc.name,
  };

  const handleOrder = (e, filterProduct) => {
    const addressObj = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      zipcode: zipcodeRef.current.value,
      address: addressRef.current.value,
      state: stateRef.current.value,
      city: cityRef.current.value,
      payment: paymentRef.current.value,
      mobile: mobileRef.current.value,
    };
    placingOrder(addressObj, productData);
    alert("Your Order Placed Successfully !");
    navigate("/");
  };

  // 👉 Here you can call your backend order API

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side - Form */}
        <div className="p-6 border-r border-gray-200">
          <Title text1={"PERSONAL"} text2={"DETAIL"} />

          <form className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                defaultValue={initialAddress ? initialAddress.firstName : ""}
                ref={firstNameRef}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                defaultValue={initialAddress ? initialAddress.lastName : ""}
                ref={lastNameRef}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={initialAddress ? initialAddress.email : ""}
              ref={emailRef}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                name="zipcode"
                placeholder="Zipcode"
                defaultValue={initialAddress ? initialAddress.zipcode : ""}
                ref={zipcodeRef}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="address"
                placeholder="Street/House.No/Landmark"
                defaultValue={initialAddress ? initialAddress.address : ""}
                ref={addressRef}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-1">
                  Select your State
                </h3>
                <select
                  name="state"
                  defaultValue={initialAddress ? initialAddress.state : ""}
                  ref={stateRef}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">-- Select State --</option>
                  <option value="utter-pradesh">Uttar Pradesh</option>
                  <option value="asam">Assam</option>
                  <option value="gujrat">Gujarat</option>
                </select>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-1">
                  Select your City
                </h3>
                <select
                  name="city"
                  defaultValue={initialAddress ? initialAddress.city : ""}
                  ref={cityRef}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">-- Select City --</option>
                  <option value="ghazipur">Ghazipur</option>
                  <option value="varanasi">Varanasi</option>
                  <option value="lucknow">Lucknow</option>
                </select>
              </div>
            </div>
            <input
              type="number"
              name="mobile"
              placeholder="Mobile"
              defaultValue={initialAddress ? initialAddress.mobile : ""}
              ref={mobileRef}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </form>
        </div>

        {/* Right Side - Order Summary */}
        <div className="p-6 bg-gray-50 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img
                src={filterProduct._doc?.image1}
                alt={filterProduct._doc?.name}
                className="w-24 h-24 object-cover rounded-lg shadow"
              />
              <div>
                <p className="font-semibold text-lg">
                  {filterProduct._doc?.name.toUpperCase()}
                </p>
                <p className="text-sm text-gray-600">
                  Quantity : {filterProduct?.quantity}
                </p>
                <p className="text-sm text-gray-600">
                  Size : {filterProduct?.size}
                </p>
              </div>
            </div>

            <div className="space-y-2 text-gray-700">
              <p>
                Product Price: ₹{" "}
                {filterProduct._doc?.price * filterProduct?.quantity}
              </p>
              <p>Delivery Charge: ₹ 40</p>
              <p className="font-semibold text-lg">
                Total Price: ₹{" "}
                {filterProduct._doc.price * filterProduct.quantity + 40}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Select Payment method
              </h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    defaultChecked={paymentRef.current.value === "cod"}
                    ref={paymentRef}
                  />
                  <span>Cash On Delivery</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    defaultChecked={paymentRef.current.value === "upi"}
                    ref={paymentRef}
                  />
                  <span>UPI</span>
                </label>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

          <button
            onClick={(e) => handleOrder(e, filterProduct)}
            // disabled={
            //   !formData.firstName ||
            //   !formData.lastName ||
            //   !formData.email ||
            //   !formData.zipcode ||
            //   !formData.address ||
            //   !formData.state ||
            //   !formData.city ||
            //   !formData.payment
            // }
            className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg 
                       hover:bg-indigo-700 transition font-medium shadow
                       disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
