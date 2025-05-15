import React from "react";

const FilterSection = ({ title, options }) => {
  return (
    <div className="flex flex-col gap-4 border border-gray-200 px-6 py-6 rounded-xl shadow-sm bg-white">
      <h2 className="text-xl font-semibold text-gray-800 tracking-wide border-b border-gray-200 pb-2">
        {title}
      </h2>

      <div className="flex flex-col gap-3">
        {options.map((option, index) => (
          <div className="flex items-center gap-3" key={index}>
            <input
              type="checkbox"
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              id={`${title}-${option}`}
            />
            <label
              htmlFor={`${title}-${option}`}
              className="text-sm text-gray-600 cursor-pointer"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
