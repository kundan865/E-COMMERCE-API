import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* FLEX CONTAINER */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">

          {/* BRAND / LOGO */}
          <div className="flex flex-col space-y-4">
            <h1 className="text-2xl font-bold text-blue-500">ShopEase</h1>
            <p className="text-gray-400 max-w-xs">
              Your one-stop shop for fashion, electronics, and more.
            </p>
          </div>

          {/* LINKS */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-4 md:gap-2">
            <div className="flex flex-col space-y-2">
              <h3 className="font-semibold">Company</h3>
              <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            </div>
            <div className="flex flex-col space-y-2 mt-4 sm:mt-0 sm:ml-6 md:ml-0">
              <h3 className="font-semibold">Products</h3>
              <Link to="/products" className="hover:text-blue-400 transition">All Products</Link>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" className="hover:text-blue-400 transition"><FaFacebookF /></a>
              <a href="https://www.twitter.com/" className="hover:text-blue-400 transition"><FaTwitter /></a>
              <a href="https://www.instagram.com/" className="hover:text-blue-400 transition"><FaInstagram /></a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;