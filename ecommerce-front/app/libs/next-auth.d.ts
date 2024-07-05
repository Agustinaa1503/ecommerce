import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      token: string;
      data: {
        id: string;
        fristName: string | null;
        lastName: string | null;
        image: string | null;
        role: string;
      }
    };
    expires: string; //FECHA DE EXPIRACIÓN DE LA SESIÓN. Vencimiento de la sesión.
  }
}