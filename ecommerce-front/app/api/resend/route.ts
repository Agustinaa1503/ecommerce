import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface dataEmail {
    email: string;
    token: string;
}

// Forma recomendada de usar una variable de entorno de Resend
const resend = new Resend(process.env.RESEND);
const base = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}`


export const config = {
    runtime: 'edge', // Configuración para usar la API en el entorno Edge
};



export async function POST(request: NextRequest) {
    // 
    const datos: dataEmail = await request.json();
    const { email, token } = datos;
    const confirmLink = `${base}/confirm-email/${token}` as string;
    console.log(confirmLink )
    // 
    try {
        const response = await resend.emails.send({
            to: email,
            from: 'Acme <onboarding@resend.dev>',
            subject: 'Validación Tu email',
            html: `<p>Click <a href="${confirmLink}">Aquí</a> para confirmar tu email.</p>`,
            text: 'Click en el enlace siguiente para confirmar tu email: ' + confirmLink,
        });

        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        console.error('Error enviando el correo electrónico:', error);
        return NextResponse.json({ message: 'Error enviando el correo electrónico', error }, { status: 500 });
    }
}
