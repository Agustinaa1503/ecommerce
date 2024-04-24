import Link from "next/link";
import Image from "next/image";
import Switcher from "../theme/Switcher";

const Logo = () => {
  return (
    <div className="flex gap-4">
      <a
        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 rounded"
        href="https://www.instagram.com/cotillonlibertad13/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/img/logo1.webp"
          alt="Cotillón Logo"
          className="dark rounded-full"
          width={50}
          height={50} // Asegúrate de establecer la misma altura que el ancho para que la imagen sea un círculo perfecto
          priority
        />
      </a>
      
    </div>
  );
};

export default Logo;
