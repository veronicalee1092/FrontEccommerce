import { getOrders } from "@/helpers/orders";
import { IUserSession, IOrder } from "@/interfaces/types";
import React from "react";
import { cookies } from "next/headers";

const Orders = async () => {
  const cookieStore = cookies();
  const userData: IUserSession = JSON.parse(cookieStore.get("userData")?.value ?? "{}");

  let orders: IOrder[] = [];

  try {
    // Llamada a getOrders, asegurándote de pasar un arreglo vacío para productos.
    orders = await getOrders([], userData.token);
  } catch (error) {
    console.error("Error al obtener órdenes:", error);
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto text-center">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Resumen de Pedidos
      </h2>
      {Array.isArray(orders) && orders.length > 0 ? (
        <ul className="space-y-4">
          {orders.map((order: IOrder) => (
            <li
              key={order.id}
              className="border-b pb-2 mb-2 border-gray-200"
            >
              <p className="text-gray-600">
                <strong>Status:</strong> {order.status.toLocaleUpperCase()}
              </p>
              <p className="text-gray-600">
                <strong>Fecha:</strong> {new Date(order.date).toLocaleString()}
              </p>
              
             
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No tienes pedidos recientes.</p>
      )}
    </div>
  );
};

export default Orders;
