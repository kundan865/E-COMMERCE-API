import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">

                {/* LOGO */}
                <Link to="/" className="text-2xl sm:text-3xl font-bold text-blue-600">
                    ShopEase
                </Link>

                {/* DESKTOP & TABLET LINKS */}
                <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                    <Link to="/" className="hover:text-blue-600 transition">Home</Link>
                    <Link to="/products" className="hover:text-blue-600 transition">Products</Link>

                    {/* SEARCH BAR (hidden on smaller screens) */}
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="ml-4 px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hidden lg:inline-block"
                    />

                    {/* CART ICON */}
                    <FiShoppingCart size={24} />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1 rounded-full">
                        3
                    </span>
                </div>

                {/* MOBILE MENU BUTTON */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-md px-4 pb-4">
                    <Link
                        to="/"
                        className="block py-2 border-b hover:text-blue-600 transition"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/products"
                        className="block py-2 border-b hover:text-blue-600 transition"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Products
                    </Link>

                    {/* MOBILE SEARCH */}
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            )}
        </nav>
    );
};

export default Navbar;