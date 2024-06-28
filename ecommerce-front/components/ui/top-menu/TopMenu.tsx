'use client'

import { useUIStore } from "@/store"
import Link from "next/link"
import { IoCartOutline } from "react-icons/io5"
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Logo from "@/components/shared/logo"
import { APP_ROUTES } from "@/routes/routes";

export const TopMenu = () => {

    const openSidebar = useUIStore((state) => state.openSidebar)
    const { data: session } = useSession();
    // console.log("Inicio de Sesión", session);

    if (session === undefined) {
      return null;
    }

    return (
        <nav className="flex px-5 justify-between items-center w-full">
            <div className="">
                <Logo />
            </div>

            {/* Center Menu */}
            <div className="hidden md:block">
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-yellow-500" href='/shop'>Tienda Online</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-yellow-500" href='/shop/category/fiestas'>Fiestas</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-yellow-500" href='/shop/category/fluor'>Fluor</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-yellow-500" href='/shop/category/luminoso'>Luminoso</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-yellow-500" href='/shop/category/infantiles'>Infantiles</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-yellow-500" href='/shop/category/reposteria'>Repostería</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-yellow-500" href='/shop/category/decoracion'>Decoración</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-yellow-500" href='/shop/category/globos'>Globos</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-yellow-500" href='/shop/category/otros'>Otros</Link>
            </div>

            {/* Serch, Cart, Menu */}
            <div className="flex items-center">

                {/* LUPA DE BUSQUEDA */}
                
                {/* <Link href="/search" className="mx-2">
                    <IoSearchOutline className="w-6 h-6" />
                </Link> */}

                <Link href="/shop/cart" className="mx-2">
                    <div className="relative">
                        <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-red-500 text-white">1</span>
                        <IoCartOutline className="w-6 h-6" />
                    </div>
                </Link>

                <button
                onClick={openSidebar}
                className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
                    Menú
                </button>

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

            </div>
        </nav>
    )
}