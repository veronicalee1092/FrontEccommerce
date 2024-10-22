"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { IUserSession, Order } from "@/interfaces/types"; 

const DashboardComponent = () => {
  const [userData, setUserData] = useState<IUserSession | null>(null);

  useEffect(() => {
    const userCookie = Cookies.get("userData");
   
    if (userCookie) {
      const parsedUserData = JSON.parse(userCookie);
      setUserData(parsedUserData);
    }
  }, []);

  return (
    <div className="bg-white p-12 m-8 rounded-lg shadow-lg w-full">
      <main className="w-full max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Bienvenido al Dashboard de Usuario
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Aquí puedes gestionar tu información y pedidos.
        </p>

        {userData ? (
          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Información del Usuario
            </h2>
            <p className="text-gray-600">
              <strong>Nombre:</strong> {userData.user.name}
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> {userData.user.email}
            </p>
            <p className="text-gray-600">
              <strong>Dirección:</strong> {userData.user.address}
            </p>
            <p className="text-gray-600">
              <strong>Teléfono:</strong> {userData.user.phone}
            </p>
          </div>
        ) : (
          <p className="text-red-500">No se encontró información del usuario.</p>
        )}

        
      </main>
    </div>
  );
};

export default DashboardComponent;
