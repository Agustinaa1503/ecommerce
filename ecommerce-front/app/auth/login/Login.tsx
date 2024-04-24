"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/interfaces/login.interface";
import { Input, Link } from "@nextui-org/react";
import ButtonPrimary from "@/components/ui/button-primary";
// import { signIn } from "next-auth/react"; INICIO DE SESIÓN CON GOOGLE
import { Title } from "@/components";

type Login = {
  email: string;
  password: string;
};

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<Login> = async (data) => {
    console.log(data);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const responseData = await response.json();
        throw new Error(
          responseData.message ||
            "Error al iniciar sesión, credenciales incorrectas, usuario no registrado"
        );
      }
      setIsLoggedIn(true);
      router.push("/");
      console.log("Sesión iniciada exitosamente");
    } catch (error) {
      console.log("Error al iniciar sesión", error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center pt-10">
        <div className="flex justify-end w-full mb-4">
          <Link href="/">
            <ButtonPrimary
              type="button"
              text="Página principal"
              className="border-2 border-primary bg-transparent hover:bg-transparent w-full text-gray-400"
            />
          </Link>
        </div>

        <Title title="INICIO" titlePrimary="SESIÓN" />

        <div className="container">
          {isLoggedIn ? (
            <div>
              
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col items-center">
                <label htmlFor="email" className="mb-2">
                  Ingrese su correo electrónico
                </label>
                <Input
                  isRequired
                  type="email"
                  label="Email"
                  defaultValue=""
                  className="max-w-sm mb-4"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}

                <label htmlFor="password" className="mb-2">
                  Ingrese su contraseña
                </label>
                <Input
                  isRequired
                  type="password"
                  label="Contraseña"
                  defaultValue=""
                  className="max-w-sm mb-4"
                  {...register("password")}
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}

                <div className="flex flex-col mb-2 mt-3">
                  <ButtonPrimary
                    className="hover:bg-transparent flex w-auto justify-center"
                    type="submit"
                    text="Ingresar"
                  />
                </div>
              </div>
            </form>
          )}

          {/* Separator */}
          <div className="flex items-center my-5">
            <div className="w-full border-t border-blue-300"></div>
            <div className="px-2 text-gray-400">O</div>
            <div className="w-full border-t border-blue-300"></div>
          </div>

          <div className="flex flex-col mb-2 mt-3 justify-center items-center">
            <Link href="/auth/new-account">
              <ButtonPrimary
                className="hover:bg-transparent flex w-auto justify-center"
                type="button"
                text="Crear una nueva cuenta"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
