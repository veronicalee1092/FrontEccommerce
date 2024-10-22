"use client"; 


import React, { useState } from "react";
import { IProduct } from "@/interfaces/types";


const Carousel: React.FC<{products:IProduct[]}> = ({products}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full my-12 py-12 px-4 shadow-lg bg-white "> 
      <h1 className="mb-12 text-gray-800 text-4xl font-bold text-center">Productos destacados</h1>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-contain rounded-lg" 
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2"
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
