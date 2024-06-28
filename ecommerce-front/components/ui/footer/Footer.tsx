import Container from "@/components/shared/container";
import { titleFont } from "@/config/fonts";
import Link from "next/link";

export const Footer = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center text-xs mb-10 mt-40">
        <div className="flex flex-col md:flex-row items-center justify-between border-b-2 border-neutral-200 p-6 dark:border-none w-full bg-gradient-to-r from-green-500 to-yellow-400">
          <div className="mb-4 md:mb-0 md:self-start">
            <span
              className="text-black font-bold text-medium bg-clip-text bg-gradient-to-r from-yellow-400 to-green-500"
            >
              Conócenos sobre nosotros
            </span>
          </div>
          <div className="flex justify-center items-center space-x-6">
            <Link
              href="#!"
              className="text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </Link>
            <Link
              href="#!"
              className="text-pink-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="mx-6 pt-8 pb-4 text-center hover:text-pink-700">
          <Link href="https://www.instagram.com/digitalwhiz1/" target="_blank">
            <span className={`${titleFont.className} antialiased font-bold`}>
              Digitalwhiz.{" "}
            </span>
            <span>
              Copyright © {new Date().getFullYear()}. Todos los derechos
              reservados.
            </span>
          </Link>
        </div>
      </div>
    </Container>
  );
};
