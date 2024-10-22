"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { register } from "../../helpers/auth.helper";
import Swal from "sweetalert2"; // Importa SweetAlert2

const Register: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setErrorMessage("");
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", password: "", address: "", phone: "" };

    if (!formData.name) {
      newErrors.name = "El nombre es obligatorio.";
      valid = false;
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Ingresa un email válido.";
      valid = false;
    }
    if (!formData.password || formData.password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres.";
      valid = false;
    }
    if (!formData.address) {
      newErrors.address = "La dirección es obligatoria.";
      valid = false;
    }
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Ingresa un teléfono válido de 10 dígitos.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await register(formData);
      // Cambiar alert a SweetAlert2
      await Swal.fire({
        title: "Éxito!",
        text: "Registrado con éxito",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      router.push("/login");
    } catch (error) {
      // Cambiar errorMessage a SweetAlert2
      await Swal.fire({
        title: "Error!",
        text: "Hubo un problema al registrar. Intenta nuevamente.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-12 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Registro de Usuario</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "email", "password", "address", "phone"].map((field) => (
            <div key={field}>
              <label className="block text-gray-700 font-medium mb-1">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === "password" ? "password" : field === "phone" ? "tel" : "text"}
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors[field as keyof typeof errors] ? "border-red-500" : "border-gray-300"
                }`}
                placeholder={`Ingresa tu ${field}`}
              />
              {errors[field as keyof typeof errors] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[field as keyof typeof errors]}
                </p>
              )}
            </div>
          ))}

          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
