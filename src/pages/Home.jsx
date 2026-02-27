import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { fetchProducts } from "../state/features/ProductSlice";

const Home = () => {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();

    // State for filtered products
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [error, setError] = useState("");

    // Filter products by category
    const handleCategoryClick = (category) => {
        const filterData = products.filter(
            (product) => product.category.toLowerCase() === category.toLowerCase()
        );

        if (filterData.length === 0) {
            setError(`No products found with ${category}`)
            setFilteredProducts([]);
        } else {
            setFilteredProducts(filterData);
        }
    };

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    // If filteredProducts has items, show them; otherwise show all
    // const productsToShow =
    //     filteredProducts.length > 0 ? filteredProducts : products.slice(0, 8);

    return (
        <div className="bg-gray-50">

            {/* 🔥 HERO SECTION */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">
                    <div className="max-w-xl">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Discover Your Perfect Style
                        </h1>
                        <p className="mt-4 text-lg text-gray-200">
                            Explore the latest trends in fashion, electronics, and more.
                            Shop premium quality products at unbeatable prices.
                        </p>

                        <Link
                            to="/products"
                            className="inline-block mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
                        >
                            Shop Now
                        </Link>
                    </div>

                    <div className="mt-10 md:mt-0">
                        <img
                            src="https://images.unsplash.com/photo-1607082349566-187342175e2f"
                            alt="shopping"
                            className="w-80 md:w-96 rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* 🛍 FEATURED PRODUCTS */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {products.length === 0 ? (
                        <p className="text-center col-span-full">No products available</p>
                    ) : (
                        products.slice(0, 8).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    )}
                </div>
            </section>

            {/* 🧩 CATEGORIES SECTION */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
                        Shop by Category
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {["men's clothing", "women's clothing", "electronics", "jewelery"].map(
                            (category, index) => (
                                <div
                                    onClick={() => handleCategoryClick(category)}
                                    key={index}
                                    className="bg-gray-100 p-8 rounded-xl hover:shadow-lg transition cursor-pointer"
                                >
                                    <h3 className="text-lg font-semibold">{category}</h3>
                                </div>
                            )
                        )}
                    </div>


                    <div>
                        <section className="max-w-7xl mx-auto px-6 py-16">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                                {filteredProducts.length === 0 ? (
                                    <p className="text-center col-span-full">No products available</p>
                                ) : (
                                    filteredProducts.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))
                                )}
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            {/* 🚀 CALL TO ACTION */}
            <section className="bg-indigo-700 text-white py-16 text-center">
                <h2 className="text-3xl font-bold">Get 20% Off on Your First Order</h2>
                <p className="mt-4 text-gray-200">
                    Sign up now and receive exclusive deals and discounts.
                </p>

                <button className="mt-6 bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                    Sign Up Now
                </button>
            </section>
        </div>
    );
};

export default Home;