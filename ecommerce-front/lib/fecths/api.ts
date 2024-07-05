'use client'

import { toast } from "react-toastify"; // Moduls messages

const API = `${process.env.NEXT_PUBLIC_API_URL}`

// Register
interface DataRegister {
    email: string;
    password: string;
}

export const createUserRequest = async (user: DataRegister) => {
    try {
        const response = await fetch(`${API}/user/register`, {
            method: "POST",
            body: JSON.stringify({
                email:user.email,
                password:user.password
            }),
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
        toast.success("Porfavor Valida tu Cuenta, se envio un Email");
        return responseData;
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        toast.error("Error al crear el usuario");
        throw error;
    }
};

// guardarToken de de Verificacion de Email
interface InterfaceData {
    email: string,
    token: string,
    exp: Date,
}

export async function saveToken(data:InterfaceData) {
    try{
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

// Verificar email

interface DataVerficarEmail {
    token: string;
}
export async function VerficarEmail(token:DataVerficarEmail) {
    // 
    try{
        console.log(token)
    }catch (error) {
        console.log(error)
    }
    // 
}