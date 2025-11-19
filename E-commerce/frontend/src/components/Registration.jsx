import React, { useState } from "react";
import { Form, redirect, useNavigate } from "react-router";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { postSignUp } from "../service";
import { useRef } from "react";
import { useContext } from "react";
import { userDataContext } from "../contexts/UserContent";
const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const userRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const { signup } = useContext(userDataContext);
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    const username = userRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signup(username, email, password);
    navigate("/login");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign in to your account
        </h2>

        <form
          method="POST"
          className="space-y-5"
          onSubmit={(e) => handleSignup(e)}
        >
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="john deo"
              ref={userRef}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
              ref={passwordRef}
            />
            {showPassword ? (
              <IoEyeOutline
                className="absolute right-[17%] bottom-[35.5%] md:right-[38%] md:bottom-[28%] cursor-[pointer]"
                onClick={() => setShowPassword((prev) => !prev)}
              />
            ) : (
              <IoEyeSharp
                className="absolute right-[17%] bottom-[35.5%] md:right-[38%] md:bottom-[28%] cursor-[pointer]"
                onClick={() => setShowPassword((prev) => !prev)}
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Have an account?{" "}
          <a
            href="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};
export default Registration;
