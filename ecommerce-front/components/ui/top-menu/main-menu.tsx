import Link from "next/link";
import ButtonPrimary from '@/components/ui/button-primary';
import Switcher from "../../theme/Switcher";

const MainMenu = () => {

    return (
        <ul className="flex flex-col lg:flex-row items-center gap-4">
            <li>
                <Switcher />
            </li>
            
            <li>
                <Link href="/" className="py-2 px-4 border-b-2 text-white border-primary transition-colors duration-300">
                    Inicio
                </Link>
            </li>
            <li>
                <Link href="#services" className="py-2 px-4 border-b-2 text-white border-transparent hover:border-primary transition-colors duration-300">
                    Servicios
                </Link>
            </li>
            <li>
            <Link href="#tienda" className="py-2 px-4 border-b-2 text-white border-transparent hover:border-primary transition-colors duration-300">
                Productos
            </Link>
            </li>
            <li>
                <Link href="/shop" className="py-2 px-4 border-b-2 text-white border-transparent hover:border-primary transition-colors duration-300">
                    Categorias
                </Link>
            </li>
            <li>
                <Link href="/auth/login" className="py-2 px-4 border-b-2 text-white border-transparent hover:border-primary transition-colors duration-300">
                    Registrarse
                </Link>
            </li>
            <li>
                <Link href="/auth/login">
                    <ButtonPrimary type="button" text="Iniciar Sesión"/>
                </Link>
            </li>
            
        </ul>
    );
};

export default MainMenu;
