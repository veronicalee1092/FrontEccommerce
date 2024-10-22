import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <Link href="/">Volver al inicio</Link>
    </div>
  );
};

export default NotFoundPage;
