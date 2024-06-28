"use client";

import React from "react";
import Link from "next/link";
import Switcher from "../../theme/Switcher";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { APP_ROUTES } from "@/routes/routes";

export function MainMenu() {
  const { data: session } = useSession();
  console.log("Inicio de Sesión", session);

  return (
    <>
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

        {session?.user ? (
          <div>
            <p>Hola {session?.user?.name} !!</p>
            <Image
              src={session?.user?.image}
              alt="Imagen de perfil"
              width={32}
              height={32}
              className="rounded-full"
            />
            <button
              onClick={async () =>
                await signOut({
                  callbackUrl: APP_ROUTES.HOME,
                })
              }
            >
              Cerrar sesión
            </button>
          </div>
        ) : (
          <button
            className="py-2 px-4 bg-primary text-white rounded-lg border-2 border-transparent hover:bg-transparent hover:border-primary hover:text-primary transition-colors duration-300"
            onClick={() => signIn()}>Iniciar sesión
          </button>
        )}
      </ul>
    </>
  );
}

export default MainMenu;
