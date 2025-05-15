import React, { useEffect, useState } from "react";
import { modelImages as importedModelImages } from "../assets/modelImage";
import "../index.css";

const Hero = () => {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentModelIndex((prevIndex) =>
        (prevIndex + 1) % importedModelImages.length
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 ">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2 ">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-semibold text-lg md:text-xl ">MOST POPULAR</p>
          </div>
          <h1 className="prata-regular text-4xl sm:py-3 lg:text-7xl leading-relaxed ">
          Effortless Management
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-lg md:text-xl ">Book NOW</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      <img
      
        src={importedModelImages[currentModelIndex].model}
        alt="Model"
       className="w-full sm:w-1/2 object-cover transition-all duration-500 ease-in-out transform"
      />
    </div>
  );
};

export default Hero;
