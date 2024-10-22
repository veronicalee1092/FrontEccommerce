import Link from "next/link";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6">
        <div className="ml-12">
            <nav className="flex space-x-4 mb-4">
            <Link
            href="/dashboard"
            className="text-lg font-medium text-gray-700 hover:text-blue-600 hover:scale-105 transition-transform"
            >
             Perfil
            </Link>
            <Link
            href="/dashboard/orders"
            className="text-lg font-medium text-gray-700 hover:text-blue-600 hover:scale-105 transition-transform"
            >
            Ordenes
            </Link>
            </nav>
      </div>
      <main>{children}</main>
    </div>
  );
}
