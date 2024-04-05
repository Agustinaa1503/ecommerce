'use client'

import { titleFont } from "@/config/fonts"
import { useUIStore } from "@/store"
import Link from "next/link"
import { IoCartOutline, IoSearchOutline } from "react-icons/io5"

export const TopMenu = () => {

    const openSidebar = useUIStore((state) => state.openSidebar)

    return (
        <nav className="flex px-5 justify-between items-center w-full">
            <div className="">
                {/* Logo */}
                <Link 
                    href="/">
                        <span className={`${titleFont.className} antialiased font-semibold`}>Cotillón</span>
                        <span> | Libertad</span>
                </Link>
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
            </div>
        </nav>
    )
}