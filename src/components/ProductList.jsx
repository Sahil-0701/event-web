import React from "react";

const ProductList = ({ id, name, image, price, description }) => {
  return (
    <div className="w-full h-full bg-white shadow-md rounded-lg border border-gray-200 flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-[4/3] overflow-hidden ">
        <img
          src={image}
          alt={`Product ${id}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl md:text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-md md:text-base text-gray-600 mt-1 leading-relaxed">{description}</p>
        </div>
        <div className="mt-3 text-md text-green-600 font-medium">${price}</div>
      </div>
    </div>
  );
};

export default ProductList;
