import React, { useState } from "react";
import { Form, redirect, useNavigate } from "react-router";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { getCurrentUser, postLogin } from "../service";
import { useRef } from "react";
import { useContext } from "react";
import { userDataContext } from "../contexts/UserContent";
import { toast } from "react-toastify";

const Login = () => {
  const passwordRef = useRef("");
  const emailRef = useRef("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(userDataContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;
    const email = emailRef.current.value;
    try {
      login(email, password);
      alert("Login Success!");
      navigate("/");
    } catch (error) {
      toast.error("Login Failed");
      alert("Login Failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login in to your account
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
                className="absolute right-[16%] bottom-[41%] md:right-[38%] md:bottom-[44%] cursor-[pointer]"
                onClick={() => setShowPassword((prev) => !prev)}
              />
            ) : (
              <IoEyeSharp
                className="absolute right-[16%] bottom-[41%] md:right-[38%] md:bottom-[44%] cursor-[pointer]"
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

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
