import React from "react";
import { useNavigate } from "react-router";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick=()=>{
    navigate(`/product/${product.id}`)
  }
  return (
    <div
      onClick={()=>handleClick()}
     className="bg-white rounded-xl shadow-md hover:shadow-xl transition 
     duration-300 overflow-hidden flex flex-col">

      {/* Product Image */}
      <div className="h-52 sm:h-60 md:h-64 bg-gray-100 flex items-center justify-center p-4">
        <img
          src={product?.image}
          alt={product?.title}
          className="h-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-sm sm:text-base md:text-lg font-semibold line-clamp-2">
          {product?.title}
        </h2>

        <p className="text-gray-500 text-xs sm:text-sm mt-2 line-clamp-2">
          {product?.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mt-2 text-sm">
          <span className="text-yellow-500 font-medium">
            ⭐ {product?.rating?.rate}
          </span>
          <span className="text-gray-400 ml-2">
            ({product?.rating?.count} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-lg sm:text-xl font-bold text-green-600">
            ${product?.price}
          </span>

          <button className="bg-blue-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;