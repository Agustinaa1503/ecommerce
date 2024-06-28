import Image from "next/image";
import Container from "./shared/container";
import ButtonPrimary from "./ui/buttons/button-primary";
import Header from "./shared/header";
import Link from "next/link";
const Inicio = () => {
    return (
    <>
        <Header />
        <section id="home">
            <div className="relative w-full h-screen">
                <Image
                src="/img/inicio.webp"
                alt="fondo"
                fill
                className="object-cover rounded-xl shadow-xl"
                />
            </div>
            <Container>
                <div className="absolute bg-gradient-to-tr from-black to-transparent left-0 top-0 w-full h-full">
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 lg:left-60 -translate-x-1/2 lg:translate-x-0 space-y-5">
                        <h1 className="typo1 text-3xl lg:text-6xl font-semibold text-center lg:text-left">
                        ¡Descubre la magia <br /> en cada detalle!
                        </h1>
                        <p className="text-gray-400">
                        Prepara la diversión, nosotros ponemos el resto. <br /> ¡Tu fiesta
                        será inolvidable! ¿Quieres conocer más?
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-5">

                            <Link href="/shop">
                                <ButtonPrimary 
                                    type="button" 
                                    text="Conocé Nuestro Mundo"
                                    className='border-2 border-primary bg-transparent hover:bg-transparent w-full'/>
                            </Link>

                            <Link href="/shop">
                                <ButtonPrimary 
                                    className='hover:bg-transparent w-full' 
                                    type="button" 
                                    text="Comprar ahora" />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    </>
    );
};

export default Inicio;
