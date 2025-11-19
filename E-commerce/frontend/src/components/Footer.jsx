import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h1 className="text-2xl font-bold text-white">Forever</h1>
          <p className="mt-3 text-sm">
            Your one-stop destination for timeless fashion and lifestyle
            products.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li
              className="hover:text-white cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="hover:text-white cursor-pointer"
              onClick={() => navigate("/collections")}
            >
              Shop
            </li>
            <li
              className="hover:text-white cursor-pointer"
              onClick={() => navigate("/about")}
            >
              About Us
            </li>
            <li
              className="hover:text-white cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Contact
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">
            Customer Support
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">
              Shipping & Returns
            </li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Follow Us</h2>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="hover:text-white">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-6 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Forever. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
