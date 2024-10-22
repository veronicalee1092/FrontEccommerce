"use client";
import React, { useEffect, useState } from "react";
import { IProduct, IUserSession } from "@/interfaces/types";
import CartProduct from "@/components/CartProduct/CartProduct";
import { createOrder } from "@/helpers/orders";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2"; // Importar SweetAlert2

interface CartComponentProps {
  userData: IUserSession;
}

const CartComponent: React.FC<CartComponentProps> = ({ userData }) => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const storedCart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");
    if (storedCart.length > 0) {
      setCart(storedCart);

      const totalCart = storedCart.reduce(
        (acc: number, item: IProduct) => acc + item.price,
        0
      );
      setTotal(totalCart);
    }
  }, []);

  const handleCheckOut = async () => {
    try {
      const idProducts = cart.map((product) => product.id);

      // Llamada a createOrder
      await createOrder(idProducts, userData.token);

      await Swal.fire({
        icon: 'success',
        title: 'Compra Exitosa',
        text: 'Tu compra se ha realizado correctamente.',
      });

      // Limpieza del carrito
      setCart([]);
      localStorage.setItem("cart", "[]");

      // Redirección
      router.push("/dashboard/orders");
    } catch (error) {
      console.error("Error en la compra:", error);
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al finalizar la compra.',
      });
    }
  };

  return (
    <main className="min-h-screen py-16 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-12 m-8 rounded-lg shadow-lg w-104">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">
          Carrito de Compras
        </h1>

        <div className="space-y-6">
          {cart.length > 0 ? (
            cart.map((product: IProduct) => (
              <CartProduct key={product.id} {...product} />
            ))
          ) : (
            <p className="text-gray-500">El carrito está vacío.</p>
          )}

          {cart.length > 0 && (
            <div className="mt-8 flex justify-between items-center">
              <h2 className="text-xl font-bold">Total: ${total}</h2>
              <button
                onClick={handleCheckOut}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Finalizar Compra
              </button>

              <Link href="/">
                <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
                  Continuar comprando
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default CartComponent;
