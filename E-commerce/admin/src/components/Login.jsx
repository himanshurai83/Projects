import React, { useState } from "react";
import { useNavigate } from "react-router";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { useRef } from "react";
import { useContext } from "react";
import { adminDataContext } from "../context/AdminContext";

const Login = () => {
  const passwordRef = useRef("");
  const emailRef = useRef("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(adminDataContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;
    const email = emailRef.current.value;
    console.log("email:", email);
    console.log("email:", password);
    login(email, password);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login Admin to your account
        </h2>

        <form
          method="POST"
          className="space-y-5"
          onSubmit={(e) => handleLogin(e)}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
              name="email"
              ref={emailRef}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
              name="password"
              ref={passwordRef}
            />
            {showPassword ? (
              <IoEyeSharp
                className="absolute right-[38%] bottom-[41%] cursor-[pointer]"
                onClick={() => setShowPassword((prev) => !prev)}
              />
            ) : (
              <IoEyeOutline
                className="absolute right-[38%] bottom-[41%] cursor-[pointer]"
                onClick={() => setShowPassword((prev) => !prev)}
              />
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
