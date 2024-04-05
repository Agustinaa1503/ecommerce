import Container from "@/components/shared/container";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function EmptyPage() {
    return (
        <Container>
        <div className="flex justify-center items-center h-[400px]">

            <IoCartOutline size={80} className="mx-5"/>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold">Tu carrito esta vacio</h1>
                <p className="text-gray-500">Agrega productos para que puedas verlos en tu carrito</p>
                <Link href="/shop" className="underline text-blue-500 hover:text-yellow-100">Volver a la tienda</Link>
            </div>
            
        </div>
        </Container>
    );
}