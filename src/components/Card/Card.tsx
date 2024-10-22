import React from 'react';
import { IProduct } from '../../interfaces/types';
import Image from 'next/image';

const Card: React.FC<IProduct> = ({ id, name, price, stock, image }) => {
  return (
    <div
      id={`product-${id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="w-full h-48 flex items-center justify-center overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="max-h-full max-w-full object-contain" 
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">Precio: ${price}</p>
        <p className={`text-sm ${stock > 0 ? "text-green-500" : "text-red-500"}`}>
          {stock > 0 ? `Stock: ${stock}` : "Agotado"}
        </p>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
          Detalle del Producto
        </button>
      </div>
    </div>
  );
};

export default Card;
