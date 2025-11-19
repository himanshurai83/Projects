import React, { useRef } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function Contact() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    console.log(message);
    alert("Your message was sent!");
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Have questions or need support? We’re here to help you anytime.
        </p>
      </section>

      {/* Contact Info */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-8 text-center">
        <div className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
          <FaMapMarkerAlt className="text-gray-800 text-3xl mx-auto mb-3" />
          <h4 className="font-semibold text-lg">Our Address</h4>
          <p className="text-sm text-gray-600 mt-2">
            123 Forever Street, New Delhi, India
          </p>
        </div>
        <div className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
          <FaPhone className="text-gray-800 text-3xl mx-auto mb-3" />
          <h4 className="font-semibold text-lg">Phone</h4>
          <p className="text-sm text-gray-600 mt-2">+91 98765 43210</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
          <FaEnvelope className="text-gray-800 text-3xl mx-auto mb-3" />
          <h4 className="font-semibold text-lg">Email</h4>
          <p className="text-sm text-gray-600 mt-2">support@forever.com</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
          <FaClock className="text-gray-800 text-3xl mx-auto mb-3" />
          <h4 className="font-semibold text-lg">Working Hours</h4>
          <p className="text-sm text-gray-600 mt-2">Mon - Sat: 9AM - 8PM</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Send Us a Message
        </h2>
        <form
          className="bg-white shadow-lg rounded-xl p-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
              ref={nameRef}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
              ref={emailRef}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
              ref={messageRef}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Map Section */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Find Us Here
        </h2>
        <div className="w-full h-72 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Forever Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4712792982273!2d77.2273!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdc4f2f5a1b9%3A0x2e10c67a2a847ef7!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1691234567890"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;
