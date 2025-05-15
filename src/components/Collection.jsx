import React from "react";
import ProductList from "./ProductList";
import products from "../assets/productData";

const Collection = () => {
  return (
    <div className="my-10">
      <div className="py-8 text-center text-3xl">
        <div className="inline-flex gap-2 items-center mb-3 ">
          <p className="text-gray-500 text-5xl font-medium">
            UPCOMING <span className="text-gray-700">EVENTS</span>
          </p>
        </div>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-lg text-gray-600">
        Discover, organize, and manage events with ease. Whether you're hosting or attending, our platform makes it seamless.
        </p>
      </div>
      <div className="mt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
          {products.map((product) => (
            <ProductList
              name={product.name}
              image={product.image}
              price={product.price}
              description={product.description}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
