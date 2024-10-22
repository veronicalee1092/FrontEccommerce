"use client";
import { IProduct, IUserSession } from "@/interfaces/types";
import React from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2"; // Importar SweetAlert2

interface ButtonProps {
  children: React.ReactNode;
  userData: IUserSession | null;
  product: IProduct;
}

const Button: React.FC<ButtonProps> = ({ children, userData, product }) => {
  const router = useRouter();

  const handleClick = async () => {
    if (!userData?.token) {
      await Swal.fire({
        icon: 'warning',
        title: 'Acción requerida',
        text: 'Debes loguearte para agregar productos',
      });
      router.push("/login");
      return;
    }

    const cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");

    const productExists = cart.some((item: IProduct) => item.id === product.id);

    if (productExists) {
      await Swal.fire({
        icon: 'info',
        title: 'Información',
        text: 'El producto ya existe en tu carrito',
      });
      router.push("/");
    } else {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      await Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Producto agregado correctamente',
      });
      router.push("/cart");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all"
    >
      {children}
    </button>
  );
};

export default Button;
