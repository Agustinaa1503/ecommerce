"use client";

import Link from "next/link";
import Switcher from "../../theme/Switcher";
import ButtonPrimary from "../button-primary";

const MainMenu = () => {

  return (
    <ul className="flex flex-col lg:flex-row items-center gap-4">
      <li>
        <Switcher />
      </li>

      <li>
        <Link
          href="/"
          className="py-2 px-4 border-b-2 text-gray-400 border-primary transition-colors duration-300"
        >
          Inicio
        </Link>
      </li>
      <li>
        <Link
          href="#services"
          className="py-2 px-4 border-b-2 text-gray-400 border-transparent hover:border-primary transition-colors duration-300"
        >
          Servicios
        </Link>
      </li>
      <li>
        <Link
          href="#tienda"
          className="py-2 px-4 border-b-2 text-gray-400 border-transparent hover:border-primary transition-colors duration-300"
        >
          Productos
        </Link>
      </li>
      <li>
        <Link
          href="/shop"
          className="py-2 px-4 border-b-2 text-gray-400 border-transparent hover:border-primary transition-colors duration-300"
        >
          Categorias
        </Link>
      </li>
      <li>
        <Link
          href="/auth/new-account"
          className="py-2 px-4 border-b-2 text-gray-400 border-transparent hover:border-primary transition-colors duration-300"
        >
          Registrarse
        </Link>
      </li>

      <li>
        <Link
          href="/auth/login">
        <ButtonPrimary type="button" text="Iniciar Sesión" />
        </Link>
      </li>
    </ul>
  );
};

export default MainMenu;


// import { signIn, useSession, signOut } from "next-auth/react";



// const { data: session } = useSession();
// console.log(session);


// {session?.user ? (
//     <div className="flex gap-x-2 items-center">
//       <Link href="/auth/login">Dashboard</Link>
//       <p>
//         {session.user.name} {session.user.email}
//       </p>
//       {/* <Image
//         src={session.user.image}
//         alt=""
//         className="w-10 h-10 rounded-full cursor-pointer"
//       /> */}
//       <button
//         onClick={async () => {
//           await signOut({
//             callbackUrl: "/",
//           })
//         }}
//       >
//         Cerrar Sesión
//       </button>
//     </div>
//   ) : (
//     <button
//       onClick={() => signIn()}
//       className="bg-sky-400 px-3 py-2 rounded"
//     >
//       Iniciar Sesión
//     </button>
//   )}
