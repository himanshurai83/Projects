import React from "react";
import { FaTruck, FaHeadset, FaShieldAlt, FaTags } from "react-icons/fa";
import { useNavigate } from "react-router";

function About() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">About Forever</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Discover timeless fashion and lifestyle products that bring elegance,
          comfort, and quality to your everyday life.
        </p>
      </section>

      {/* About Description */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-6">Who We Are</h2>
        <p className="text-center text-lg max-w-3xl mx-auto leading-relaxed text-gray-600">
          At <span className="font-semibold text-gray-900">Forever</span>, we
          believe fashion should be timeless. Our mission is to provide
          high-quality, stylish, and affordable products that never go out of
          style. With a curated selection of apparel, accessories, and lifestyle
          essentials, Forever is your trusted destination for trendsetting yet
          enduring fashion.
        </p>
      </section>

      {/* Mission & Values */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1521334884684-d80222895322"
            alt="Forever Fashion"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our mission is simple: to create a shopping experience that blends
              quality with affordability. We aim to inspire confidence and style
              in every customer who shops with us.
            </p>
            <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Timeless & trendy fashion choices</li>
              <li>Customer-first approach</li>
              <li>Quality assurance on every product</li>
              <li>Sustainable & ethical sourcing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-12">Why Shop With Forever?</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaTruck className="text-gray-800 text-3xl mx-auto mb-3" />
            <h4 className="font-semibold text-lg">Fast Delivery</h4>
            <p className="text-sm text-gray-600 mt-2">
              Quick & reliable shipping worldwide.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaHeadset className="text-gray-800 text-3xl mx-auto mb-3" />
            <h4 className="font-semibold text-lg">24/7 Support</h4>
            <p className="text-sm text-gray-600 mt-2">
              Always here to assist you.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaShieldAlt className="text-gray-800 text-3xl mx-auto mb-3" />
            <h4 className="font-semibold text-lg">Secure Payments</h4>
            <p className="text-sm text-gray-600 mt-2">
              Your data is safe with us.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaTags className="text-gray-800 text-3xl mx-auto mb-3" />
            <h4 className="font-semibold text-lg">Affordable Prices</h4>
            <p className="text-sm text-gray-600 mt-2">
              Luxury fashion made affordable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-12 text-center">
        <h2 className="text-3xl font-semibold">
          Be Part of the Forever Family
        </h2>
        <p className="mt-3 text-lg">Join thousands of happy customers today.</p>
        <button
          className="mt-6 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow hover:bg-gray-200 transition cursor-pointer"
          onClick={() => navigate("/collections")}
        >
          Shop Now
        </button>
      </section>
    </div>
  );
}

export default About;
