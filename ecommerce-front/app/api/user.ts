'use client';

import { CreateUser, UpdateUser } from "@/interfaces/register.interface";
import { toast } from "react-toastify";

const API = process.env.API_URL || "http://localhost:8080/api";

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

        const responseData = await response.json();
        toast.success("Usuario creado exitosamente");
        return responseData;
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

export const getUserByIdRequest = async (_id: string) => fetch(`${API}/user/${_id}`);

export const loginUser = async ({ email, password }: { email: string; password: string }) => {
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
        localStorage.setItem("userData", JSON.stringify(userData));
        toast.success("Sesión iniciada exitosamente");
        return userData;
    } catch (error: any) {
        console.error("Error al iniciar sesión:", error.message);
        toast.error(error.message || "Error al iniciar sesión");
        throw error;
    }
};