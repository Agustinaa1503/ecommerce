"use client";

import { useUIStore } from "@/store";
import clsx from "clsx";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import {
  IoCloseOutline,
  IoLogIn,
  IoLogInOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { APP_ROUTES } from "@/routes/routes";

export const Sidebar = () => {
  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);
  const closeSidebar = useUIStore((state) => state.closeSidebar);

  return (
    <div>
      {/* Background Black */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {/* Blur */}
      {isSidebarOpen && (
        <div
          onClick={() => closeSidebar()}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}

      {/* Sidebar Menú */}
      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[400px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSidebarOpen,
          }
        )}
      >
        <IoCloseOutline
          size={30}
          className="absolute top-5 right-5 cursor-pointer text-gray-400"
          onClick={() => closeSidebar()}
        />

        {/* Inpout */}
        <div className="relative mt-12">
          <IoSearchOutline
            size={20}
            className="absolute top-2 left-2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-100 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Menú */}
        <Link
          href="/"
          className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoPersonOutline size={20} className="text-black" />
          <span className="ml-3 text-lg text-gray-500">Perfil</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-3 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoTicketOutline size={20} className="text-black" />
          <span className="ml-3 text-lg text-gray-500">Compras</span>
        </Link>

        <Link
          href="/auth/login"
          className="flex items-center mt-3 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogIn size={20} className="text-black" />
          <button
            className="ml-3 text-lg text-gray-500"
            onClick={() => signIn()}
          >
            Iniciar sesión
          </button>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-3 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogInOutline size={20} className="text-black" />
          <button
            className="ml-3 text-lg text-gray-500"
            onClick={async () =>
              await signOut({
                callbackUrl: APP_ROUTES.HOME,
              })
            }
          >
            Cerrar sesión
          </button>
        </Link>

        {/* ADMINISTRADOR - SOLO DEBE APARECER CUANDO SEA ADMINISTRADOR */}

        {/* Separator */}
        <div className="w-full h-px bg-blue-100 my-4">
          <Link
            href="/shop"
            className="flex items-center mt-8 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoShirtOutline size={20} className="text-black" />
            <span className="ml-3 text-lg text-gray-500">Productos</span>
          </Link>

          <Link
            href="/shop/admin"
            className="flex items-center mt-3 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoTicketOutline size={20} className="text-black" />
            <span className="ml-3 text-lg text-gray-500">
              Panel Administrador
            </span>
          </Link>

          <Link
            href="/"
            className="flex items-center mt-3 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoPeopleOutline size={20} className="text-black" />
            <span className="ml-3 text-lg text-gray-500">
              Usuarios registrados
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};
