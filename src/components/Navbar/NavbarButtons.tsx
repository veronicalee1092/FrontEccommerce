"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import Swal from "sweetalert2"; 

const NavbarButtons: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter(); 

  const checkLoginStatus = () => {
    const userData = Cookies.get("userData");
    return userData ? true : false;
  };

  useEffect(() => {
    setIsLoggedIn(checkLoginStatus());
  }, [pathname]);

  const handleLogout = async () => {
    Cookies.remove("userData"); 
    setIsLoggedIn(false); 
    await Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'Sesión cerrada correctamente',
    });
    router.push("/");
  };

  return (
    <ul className="flex space-x-6">
      {!isLoggedIn ? (
        <>
          <li>
            <Link
              href="/login"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Iniciar Sesión
            </Link>
          </li>
          <li>
            <Link
              href="/register"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Registrarse
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link
              href="/dashboard"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Perfil
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Carrito
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Cerrar Sesión
            </button>
          </li>
        </>
      )}
    </ul>
  );
};

export default NavbarButtons;
