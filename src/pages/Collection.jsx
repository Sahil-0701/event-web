import React from 'react';
import FilterSection from '../components/FilterSection';
import products from '../assets/productData';
import ProductList from '../components/ProductList';

const Collection = () => {
  return (
    <div className="min-h-[60vh] flex flex-col md:flex-row gap-8 px-4 my-10">
      {/* Left: Filter */}
      <div className="flex-shrink-0 w-full md:w-1/5 flex flex-col gap-6 ">
        <div>
          <p className="text-gray-500 text-3xl font-medium mb-2">FILTER</p>
        </div>
        <FilterSection title="CATEGORIES" options={["Hurry!","Upcoming", "Pre-Booking"]} />
        <FilterSection title="TYPE" options={["Outdoor", "Indoor","Event","Series"]} />
      </div>

      {/* Right: Collections and Sort */}
      <div className="flex-grow w-full md:w-4/5 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-gray-500 text-3xl font-medium">
              EVENT <span className="text-gray-700">Tickets</span>
            </p>
          </div>
          <select className="py-2 px-3 border-2 border-gray-300 rounded-md">
            <option>Sort by: Relevant</option>
            <option>Sort by: Low to High</option>
            <option>Sort by: High to Low</option>
          </select>
        </div>

        {/* Placeholders for collection items */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
