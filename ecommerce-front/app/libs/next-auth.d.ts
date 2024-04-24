import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
        firstName: string;
        email:string;
    };
    expires: string;
  }
}