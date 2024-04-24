import dotenv from "dotenv";
dotenv.config();

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

// Verifica que GOOGLE_CLIENT_ID y GOOGLE_CLIENT_SECRET estén definidos en el archivo .env
if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error('GOOGLE_CLIENT_ID o GOOGLE_CLIENT_SECRET no está definido en el archivo .env');
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@example.com" },
        password: { label: "Password", type: "password", placeholder: "********" },
      },
      async authorize(credentials, req) {
        const res = await fetch(
          `/auth/new-account`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
          }
        );
        const data = await res.json();
        if (res.ok && data) {
          return data;
        }
        return null;
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && token.email) {
        session.user.email = token.email;
      }
      return session;
    },
  }
});

export { handler as GET, handler as POST };
