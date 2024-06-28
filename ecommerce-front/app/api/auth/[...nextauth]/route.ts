import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser, createUserRequest } from "@/app/api/auth/user";

export const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "ejemplo@gmail.com" },
        password: { label: "Password", type: "password", placeholder: "********" },
      },
      async authorize(credentials) {
        try {
          const { email, password } = credentials!;
          const userData = await loginUser({ email, password });
          if (!userData) {
            throw new Error("Credenciales incorrectas");
          }
          return { id: userData._id, email: userData.email };
        } catch (error) {
          console.error("Error de autenticación:", error);
          throw new Error("Credenciales incorrectas");
        }
      },
    }),
  ],
  pages: {
    signIn: '/api/auth/register',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account && account.provider === "google" && profile) {
        const email = profile.email;
        const name = profile.name;
        const image = profile.image || "";
        
        if (email && name) {
          try {
            // Llamar a tu API para crear o actualizar el usuario en tu base de datos
            await createUserRequest({ name, email, image, provider: "google" });
            return true;
          } catch (error) {
            console.error("Error al crear el usuario con Google:", error);
            return false;
          }
        } else {
          console.error("Faltan datos del perfil de Google:", { email, name, image });
          // Aquí puedes manejar la ausencia de datos del perfil de Google, como mostrar un mensaje al usuario
          return false;
        }
      }
      return true;    
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token.user as any;
      }
      return session;
    },
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

