"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavbarButtons from "@/components/Navbar/NavbarButtons";
import Cookies from "js-cookie";
import { IUserSession } from "@/interfaces/types";

const Navbar = () => {
  const [userData, setUserData] = useState<IUserSession | null>(null);

  useEffect(() => {
    const storedData = Cookies.get("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

    return (
      <nav className="bg-gray-800 text-white py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-6">
          <Link href="/" className="text-2xl font-bold">
            MiTienda
          </Link>
          <NavbarButtons userData={userData || { token: "" }} />
          </div>
    </nav>
  );
};

export default Navbar;
