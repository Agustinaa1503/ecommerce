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
import { createUserRequest } from "@/lib/fecths/api";
import { APP_ROUTES, AUTH_ROUTES } from "@/routes/routes";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import {generateConfirmationLink} from "@/lib/utils";

type Register = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterForm() {
  const [isInvalidToken, setIsInvalidToken] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const searchParams = useSearchParams();
  const router = useRouter();

  const { data: session } = useSession();
  console.log("Inicio de Sesión", session);

  // useEffect(() => {
  //   if (searchParams) {
  //     const token = searchParams.get("token");
  //     if (token) {
  //       setIsInvalidToken(true);
  //     }
  //   }
  // }, [searchParams]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Register>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<Register> = async (data) => {
    // 
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    // 
    try {
      const RegisterData = {
        email:data.email,
        password: data.password
      }
      const response = await createUserRequest(RegisterData);
      console.log('\x1b[31m%s\x1b[0m',response);
      setIsLoggedIn(true);
      //
      const token = await generateConfirmationLink({email:data.email})
      // 
      console.log(token);
      // 
      const dataEmail = {
        email: data.email,
        token: token,
      }
      // 
      const sendEmail = await fetch("/api/resend", {
        method: "POST",
        body: JSON.stringify(dataEmail),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!sendEmail.ok) {
        throw new Error("Failed to send email");
      }

      //router.push(AUTH_ROUTES.LOGIN);
      router.push("/")
    } catch (error) {
      console.log("Error al crear el usuario", error);
      setIsInvalidToken(true);
    }
  };

  // 
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordsMatch(true);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(true);
  };
  // 

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
            <p>Hola {session?.user?.data.fristName} !!</p>
            {/* <Image
              src={session?.user?.image}
              alt="Imagen de perfil"
              width={32}
              height={32}
              className="rounded-full"
            /> */}
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col items-center">
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

                {!passwordsMatch && (
                  <span className="text-red-500">Las contraseñas no coinciden</span>
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
        </div>
      </div>
    </Container>
  );
}
