import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <div className="flex">
        <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.instagram.com/cotillonlibertad13/"
            target="_blank"
            rel="noopener noreferrer">
            <Image
            src="/img/logo1.webp"
            alt="Cotillón Logo"
            className="dark"
            width={50}
            height={20}
            priority
            />
        </a>
        </div>
    );
};

export default Logo;
