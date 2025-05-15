import React from "react";
import products from "../assets/productData";
import ProductList from "./ProductList";

const BestSeller = () => {
  const featuredProducts = products.filter((product) => product.isFeatured);
  return (
    <div className="my-10">
      <div className="py-8 text-center text-3xl">
        <div className="inline-flex gap-2 items-center mb-3 ">
          <p className="text-gray-500 text-5xl font-medium">
            TRENDING<span className="text-gray-700">-NOW</span>
          </p>
        </div>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-lg text-gray-600">
          Discover the most exciting and talked-about sports events, handpicked
          by fans and organizers alike. From high-energy tournaments to
          exclusive matches, explore what's making waves in the world of sports
          right now.
        </p>
      </div>
      <div className="mt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {featuredProducts.map((product) => (
            <ProductList
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
