"use client";
import { IProduct } from "@/interfaces/types";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Button from "@/components/Button/Button";

const ProductDetail: React.FC<{props: IProduct}> = (props) => {
  
  const [userData, setUserData] = useState<{ token?: string }>({});
  const { name, image, description, price, stock } = props;

  useEffect(() => {
    const userCookie = Cookies.get("userData");
    if (userCookie) {
      setUserData(JSON.parse(userCookie));
    }
  }, []);

  return (
    <div className="max-w-3xl mx-auto my-12 p-8 bg-white shadow-md rounded-lg">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img
            src={image}
            alt={name}
            className="w-full h-auto rounded-lg object-contain"
          />
        </div>

        <div className="md:w-2/3 flex flex-col justify-center space-y-6">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-lg text-gray-700">
            Precio: <span className="font-semibold">${price}</span>
          </p>
          <p className="text-md text-gray-600">Stock disponible: {stock}</p>
          <p className="text-gray-600">{description}</p>

          <Button userData={userData} product={props}>
            Agregar al Carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
