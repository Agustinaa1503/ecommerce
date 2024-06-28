"use client";

import Container from "@/components/shared/container";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@nextui-org/react";
import { Title } from "@/components";
import ButtonPrimary from "@/components/ui/buttons/button-primary";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterSchema } from "@/interfaces/register.interface";
import { createUserRequest } from "@/app/api/auth/user";
import { APP_ROUTES, AUTH_ROUTES } from "@/routes/routes";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

type Register = {
  name: string;
  phone: string;
  email: string;
  image?: string;
  // provider?: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterForm() {
  const [isInvalidToken, setIsInvalidToken] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const { data: session } = useSession();
  console.log("Inicio de Sesión", session);

  useEffect(() => {
    if (searchParams) {
      const token = searchParams.get("token");
      if (token) {
        setIsInvalidToken(true);
      }
    }
  }, [searchParams]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Register>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<Register> = async (data) => {
    try {
      const response = await createUserRequest(data);
      console.log(response);
      setIsLoggedIn(true);

      router.push(AUTH_ROUTES.LOGIN);
    } catch (error) {
      console.log("Error al crear el usuario", error);
      setIsInvalidToken(true);
    }
  };

  return (
    <Container>
      <div className="flex flex-col justify-center items-center pt-10">
        <div className="flex justify-end w-full mb-4 mr-10">
          <Link href="/">
            <ButtonPrimary
              type="button"
              text="Volver al inicio"
              className="border-2 border-primary bg-transparent hover:bg-transparent w-full text-gray-400"
            />
          </Link>
        </div>

        {session?.user ? (
          <div className="flex flex-col items">
            <p>Hola {session?.user?.name} !!</p>
            <Image
              src={session?.user?.image}
              alt="Imagen de perfil"
              width={32}
              height={32}
              className="rounded-full"
            />
            <button
              onClick={async () =>
                await signOut({
                  callbackUrl: APP_ROUTES.HOME,
                })
              }
              className="mt-4 py-2 px-4 bg-red-500 text-white rounded-lg"
            >
              Cerrar sesión
            </button>
          </div>
        ) : (
          <button
            className="flex items-center justify-center mt-6 mb-6 py-2 px-4 bg-white text-gray-700 rounded-lg border border-gray-300 shadow-md hover:bg-gray-100 transition-colors duration-300"
            onClick={() => signIn("google")}
          >
            <Image
              src="/img/google.gif"
              alt="Google Logo"
              width={50}
              height={50}
              className="mr-2"
            />
            Iniciar sesión con Google
          </button>
        )}

        <Title title="CREAR" titlePrimary="CUENTA" />

        <div className="container">
          {!isLoggedIn && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col items-center">
                <Input
                  isRequired
                  type="text"
                  label="Nombre y Apellido"
                  defaultValue=""
                  isInvalid={isInvalidToken}
                  className="max-w-sm mb-4"
                  {...register("name")}
                />
                {errors.name && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}

                <Input
                  isRequired
                  type="number"
                  label="Teléfono"
                  defaultValue=""
                  isInvalid={isInvalidToken}
                  className="max-w-sm mb-4"
                  {...register("phone")}
                />
                {errors.phone && (
                  <span className="text-red-500">{errors.phone.message}</span>
                )}

                <Input
                  isRequired
                  type="email"
                  label="Email"
                  defaultValue=""
                  isInvalid={isInvalidToken}
                  className="max-w-sm mb-4"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}

                <Input
                  isRequired
                  type="password"
                  label="Contraseña"
                  defaultValue=""
                  isInvalid={isInvalidToken}
                  className="max-w-sm mb-4"
                  {...register("password")}
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}

                <Input
                  isRequired
                  type="password"
                  label="Confirmar Contraseña"
                  defaultValue=""
                  isInvalid={isInvalidToken}
                  className="max-w-sm mb-4"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <span className="text-red-500">
                    {errors.confirmPassword.message}
                  </span>
                )}

                <div className="flex flex-col mb-2 mt-3">
                  <Link href="/api/auth/login" className="mb-3">
                    ¿Ya tienes una cuenta? Ir a inicio de sesión
                  </Link>

                  <ButtonPrimary
                    className="hover:bg-transparent flex w-auto justify-center"
                    type="submit"
                    text="Crear cuenta"
                  />
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </Container>
  );
}
