import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
//import { loginUser, createUserRequest } from "@/app/api/auth/user";
import jwt from "jsonwebtoken";

const API = `${process.env.NEXT_PUBLIC_BACKEND_URL}` //
const secret = `${process.env.JWT_SECRET}` // 

interface UserToken {
  id: string;
  fristName: string | null;
  lastName: string | null;
  image: string | null;
  role: string;
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "ejemplo@gmail.com" },
        password: { label: "Password", type: "password", placeholder: "********" },
      },
      async authorize(credentials) {
          const resp = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`,
            {
              method: "POST",
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
              headers: {
                "Content-Type": "application/json"
              },
            }
          );
          const user = await resp.json();

        if (resp.status === 401) {
          throw new Error("Credenciales incorrectas");
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: '/auth/register',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      const tokenString = String(session.user.token);
      const dataToken = jwt.verify(tokenString, secret) as UserToken;
      console.log(dataToken)
      if (dataToken) {
        session.user.data = dataToken
      }
      console.log('[Linea de Test] Esto es la session ', session)
      return session;
    }
  },
});

export { handler as GET, handler as POST };




// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { loginUser } from "@/app/api/user";

// export const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email", placeholder: "ejemplo@gmail.com" },
//         password: { label: "Password", type: "password", placeholder: "********" },
//       },
//       async authorize(credentials) {
//         try {
//           const { email, password } = credentials!;
//           const userData = await loginUser({ email, password });
//           if (!userData) {
//             throw new Error("Credenciales incorrectas");
//           }
//           return { id: userData._id, email: userData.email };
//         } catch (error) {
//           console.error("Error de autenticación:", error);
//           throw new Error("Credenciales incorrectas");
//         }
//       },
//     }),
//   ],
//   pages: {
//     signIn: '/api/auth/register',
//   },
//   session: {
//     strategy: 'jwt',
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.user = user;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token) {
//         session.user = token.user as any;
//       }
//       return session;
//     },
//   },
// });

// export { handler as GET, handler as POST };

