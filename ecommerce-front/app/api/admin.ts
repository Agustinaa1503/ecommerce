import { CreateAdmin, UpdateAdmin } from "@/interfaces/register.interface";
import { toast } from "react-toastify";

// require('dotenv').config();
// const API = process.env.API_URL;

const API = "http://localhost:8080/api";

export const createAdminRequest = async (admin: CreateAdmin) => {
    try {
        const response = await fetch(`${API}/admin`, {
            method: 'POST',
            body: JSON.stringify(admin),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            const responseData = await response.json();
            throw new Error(responseData.message || 'Error al crear el usuario administrador');
        }

        const responseData = await response.json();
        toast.success('Usuario administrador creado exitosamente');
        return responseData;
    } catch (error: any) {
        console.error('Error al crear el usuario administrador:', error);
        toast.error(error.message || 'Error al crear el usuario administrador');
        throw error;
    }
}

export const updateAdminRequest = async (_id: string, admin: UpdateAdmin) => {
    try {
        const response = await fetch(`${API}/admin/${_id}`, {
            method: 'PUT',
            body: JSON.stringify(admin),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            const responseData = await response.json();
            throw new Error(responseData.message || 'Error al modificar el usuario administrador');
        }

        toast.success('Usuario administrador modificado exitosamente');
        return response.json();
    } catch (error: any) {
        console.error('Error al modificar el usuario administrador:', error.message);
        toast.error(error.message || 'Error al modificar el usuario administrador');
        throw error;
    }
}

export const deleteAdminRequest = async (_id: string) => {
    try {
        const response = await fetch(`${API}/admin/${_id}`, {
            method: 'DELETE'
        })

        if (!response.ok) {
            const responseData = await response.json();
            throw new Error(responseData.message || 'Error al eliminar el usuario administrador');
        }

        toast.success('Usuario administrador eliminado exitosamente');
    } catch (error: any) {
        console.error('Error al eliminar el usuario administrador:', error.message);
        toast.error(error.message || 'Error al eliminar el usuario administrador');
        throw error;
    }
}

export const getAdminRequest = async () => fetch(`${API}/admin`);

export const getAminByIdRequest = async (_id: string) => fetch(`${API}/admin/${_id}`);


export const loginAdmin = async ({ email, password }: { email: string; password: string }) => {
    try {
        const response = await fetch(`${API}/admin/login`, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            const responseData = await response.json();
            throw new Error(responseData.message || 'Error al iniciar sesión');
        }

        const adminData = await response.json();
        // Almacenar datos del usuario en el almacenamiento local
        localStorage.setItem('userData', JSON.stringify(adminData));
        
        toast.success('Sesión iniciada exitosamente');

        // Redirigir al usuario después de iniciar sesión
        window.location.href = '/'; // Cambia '/' por la ruta a la que deseas redirigir al usuario

    } catch (error: any) {
        console.error('Error al iniciar sesión:', error.message);
        toast.error(error.message || 'Error al iniciar sesión');
        throw error;
    }
}
