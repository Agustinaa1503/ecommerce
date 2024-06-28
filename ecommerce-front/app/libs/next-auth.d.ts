import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
        name: string;
        email:string;
        image: string;
    };
    expires: string; //FECHA DE EXPIRACIÓN DE LA SESIÓN. Vencimiento de la sesión.
  }
}