import React, { useState } from 'react';


const ProductDetails = () => {
  const product = {
    title: 'Wireless Bluetooth Headphones',
    images: [
      'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
     
    ],
    price: 79.99,
    description:
      'Experience true wireless freedom with crystal-clear sound, noise cancellation, and all-day battery life.',
    inStock: true,
  };

  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="w-full mx-auto px-4 py-10 bg-white min-h-[70vh]">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Thumbnails */}
        <div className="md:w-1/5 flex md:flex-col gap-4">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`w-20 h-20 object-cover rounded-lg border-2 cursor-pointer ${
                mainImage === img ? 'border-blue-600' : 'border-gray-200'
              }`}
              onClick={() => setMainImage(img)}
              loading="lazy"
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="md:w-1/3">
          <img
            src={mainImage}
            alt={product.title}
            className="w-full h-[400px] object-cover rounded-lg shadow-md"
            loading="lazy"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <p className="text-2xl font-bold text-green-600 mb-2">
              ${product.price.toFixed(2)}
            </p>
            <p
              className={`mb-4 font-medium ${
                product.inStock ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
