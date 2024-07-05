'use client'

import React, { useEffect, useState } from 'react';
import { VerficarEmail } from "@/lib/fecths/api";

interface VerificarEmailResponse {
    message: string;
}

export default function ConfirmarToken({ token }: { token: string }) {
    const [serverResponse, setServerResponse] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: VerificarEmailResponse = await VerficarEmail({ token });
                setServerResponse(response.message);
            } catch (error) {
                console.error('Error al enviar el token:', error);
                setServerResponse('Error al enviar el token');
            }
        };
        fetchData();
    }, [token]);

    return (
        <div className="h-screen w-screen">
            <main className="text-white justify-center flex min-h-screen flex-col items-center">
                <p>Esto es el Token: {token}</p>
                {serverResponse && <p>Respuesta del servidor: {serverResponse}</p>}
            </main>
        </div>
    );
}
