import { IProduct } from "@/interfaces/types";
import React from "react";

const CartProduct: React.FC<IProduct> = ({ image, name, price }) => {
  return (
    <div className="flex items-center gap-4 p-4 border-b border-gray-300">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 object-contain"
      />
      <div className="flex-1">
        <h2 className="text-lg font-semibold">Producto: {name}</h2>
        <p>Precio: ${price}</p>
      </div>

    </div>
  );
};

export default CartProduct;
