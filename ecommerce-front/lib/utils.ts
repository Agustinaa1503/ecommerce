
import { v4 as uuidv4 } from 'uuid';
import { saveToken } from "@/lib/fecths/api"

const base = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}`
console.log(base)

interface Data {
    email: string;
  }
  
  export async function generateConfirmationLink(data: Data): Promise<string> {
    const { email } = data;
    
    // Generar un token único
    const token = uuidv4();
    console.log(token);
  
    // Calcular la fecha de expiración (1 hora desde ahora)
    const expires = new Date(new Date().getTime() + 3600 * 1000);
  
    // Crear el objeto para guardar el token
    const tokenData = {
      email: email as string,
      token: token as string,
      exp: expires as Date
    };
  
    // Guardar el token usando tu función de servicio
    const createTokenResponse = await saveToken(tokenData);
    console.log('Respuesta Test Guardar Token',createTokenResponse);
    console.log('Token Generado',token)
  
    return token;
  }

