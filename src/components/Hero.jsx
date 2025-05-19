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
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={importedModelImages[currentModelIndex].model}
        alt="Model"
        className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 ease-in-out"
      />

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 flex items-center justify-start h-full px-8 sm:px-16">
        <div className="text-[#EFEFEF] max-w-xl">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#EFEFEF]"></p>
            <a
              href="#"
              className="font-semibold text-lg md:text-xl transform transition-transform duration-300 hover:scale-110"
            >
              MOST POPULAR
            </a>
          </div>
          <h1 className="prata-regular text-4xl sm:py-3 lg:text-7xl leading-relaxed">
            Effortless Management
          </h1>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="font-semibold text-lg md:text-xl transform transition-transform duration-300 hover:scale-110"
            >
              Book NOW
            </a>
            <p className="w-8 md:w-11 h-[2px] bg-[#EFEFEF]"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
