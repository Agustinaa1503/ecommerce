import { titleFont } from "@/config/fonts"
import Link from "next/link"
import Image from 'next/image';

export const PageNotFound = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row h-[600px] w-full justify-center items-center align-middle">

            <div className="text-center px-5 mx-5">
                {/* <h2 className={`${titleFont.className} antialised text-9xl` }>
                    404
                </h2> */}
                <p className="font-semibold text-xl">¡Lo sentimos, página no encontrada!</p>
                <p className="font-light">
                    <span>Puedes regresar al </span>
                    <Link 
                        href="/"
                        className="font-normal hover:underline transition-all text-blue-500">
                            Inicio
                    </Link>
                </p>
            </div>

            <div className="px-5 mx-5">
                <Image 
                    src="/img/Error404.png"
                    alt="Error 404"
                    className="w-full md:w-auto"
                    width={550}
                    height={550} />
            </div>
        </div>   
    )
}