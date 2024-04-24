import { CreateUser, UpdateUser } from "@/interfaces/register.interface";
import { toast } from "react-toastify";
import router from "next/router";

const API = "http://localhost:8080/api";

export const createUserRequest = async (user: CreateUser) => {
    try {
      const response = await fetch(`${API}/user`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        const responseData = await response.json();
        const errorMessage = responseData.message || "Error al crear el usuario";
        throw new Error(errorMessage);
      }
  
      const responseData = await response.json(); // Llamar a response.json() una vez
      toast.success("Usuario creado exitosamente");
      return responseData; // Devolver los datos del usuario
    } catch (error: any) {
      console.error("Error al crear el usuario:", error);
      toast.error(error.message || "Error al crear el usuario");
      throw error;
    }
  };
  

export const updateUserRequest = async (_id: string, user: UpdateUser) => {
  try {
    const response = await fetch(`${API}/user/${_id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const responseData = await response.json();
      throw new Error(responseData.message || "Error al modificar el usuario");
    }

    toast.success("Usuario modificado exitosamente");
    return response.json();
  } catch (error: any) {
    console.error("Error al modificar el usuario:", error.message);
    toast.error(error.message || "Error al modificar el usuario");
    throw error;
  }
};

export const deleteUserRequest = async (_id: string) => {
  try {
    const response = await fetch(`${API}/user/${_id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const responseData = await response.json();
      throw new Error(responseData.message || "Error al eliminar el usuario");
    }

    toast.success("Usuario eliminado exitosamente");
  } catch (error: any) {
    console.error("Error al eliminar el usuario:", error.message);
    toast.error(error.message || "Error al eliminar el usuario");
    throw error;
  }
};

export const getUserRequest = async () => fetch(`${API}/user`);

export const getUserByIdRequest = async (_id: string) =>
  fetch(`${API}/user/${_id}`);

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const response = await fetch(`${API}/user/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const responseData = await response.json();
      throw new Error(responseData.message || "Error al iniciar sesión");
    }

    const userData = await response.json();
    // Almacenar datos del usuario en el almacenamiento local
    localStorage.setItem("userData", JSON.stringify(userData));

    toast.success("Sesión iniciada exitosamente");

    // Redirigir al usuario después de iniciar sesión
    window.location.href = "/"; // Cambia '/' por la ruta a la que deseas redirigir al usuario
  } catch (error: any) {
    console.error("Error al iniciar sesión:", error.message);
    toast.error(error.message || "Error al iniciar sesión");
    throw error;
  }
};
