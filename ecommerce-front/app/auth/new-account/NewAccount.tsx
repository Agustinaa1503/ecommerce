"use client";

import Container from "@/components/shared/container";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@nextui-org/react";
import { Title } from "@/components";
import ButtonPrimary from "@/components/ui/button-primary";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterSchema } from "@/interfaces/register.interface";
import { createUserRequest } from "@/app/api/user";
// import { useSession, signIn, signOut } from "next-auth/react";

type Register = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function NewAccountPage() {
  const [isInvalid, setIsInvalid] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // INICIO DE SESION CON GOOGLE FINAL CÓDIGO COMENTADO

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Register>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<Register> = async (data) => {
    console.log(data);
    try {
      const response = await createUserRequest(data);
      console.log(response);
      setIsLoggedIn(true);

      router.push("/auth/login");
    } catch (error) {
      console.log("Error al crear el usuario", error);
      setIsInvalid(true);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      // Si el usuario está autenticado, redirigirlo a la página principal;
      router.push("/auth/login");
    } else {
      // Si el usuario no está autenticado, mostrar un mensaje de error
      console.log("Error al iniciar sesión");
    }
  }, [isLoggedIn]);

  return (
    <div>
      <Container>
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

          <Title title="CREAR" titlePrimary="CUENTA" />
          <div className="container">
            {/* INICIO SESIÓN CON GOOGLE FINAL CÓDIGO COMENTADO */}

            {!isLoggedIn && (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col items-center">
                  <Input
                    isRequired
                    type="text"
                    label="Nombre"
                    defaultValue=""
                    isInvalid={isInvalid}
                    className="max-w-sm mb-4"
                    {...register("firstName")}
                    // onChange={handleInputChange}
                  />
                  {errors.firstName && (
                    <span className="text-red-500">
                      {errors.firstName.message}
                    </span>
                  )}

                  <Input
                    isRequired
                    type="text"
                    label="Apellido"
                    defaultValue=""
                    isInvalid={isInvalid}
                    className="max-w-sm mb-4"
                    {...register("lastName")}
                    // onChange={handleInputChange}
                  />
                  {errors.lastName && (
                    <span className="text-red-500">
                      {errors.lastName.message}
                    </span>
                  )}

                  <Input
                    isRequired
                    type="number"
                    label="Teléfono"
                    defaultValue=""
                    isInvalid={isInvalid}
                    className="max-w-sm mb-4"
                    {...register("phone")}
                    // onChange={handleInputChange}
                  />
                  {errors.phone && (
                    <span className="text-red-500">{errors.phone.message}</span>
                  )}

                  <Input
                    isRequired
                    type="email"
                    label="Email"
                    defaultValue=""
                    isInvalid={isInvalid}
                    className="max-w-sm mb-4"
                    {...register("email")}
                    // onChange={handleInputChange}
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                  )}

                  <Input
                    isRequired
                    type="password"
                    label="Contraseña"
                    defaultValue=""
                    isInvalid={isInvalid}
                    className="max-w-sm mb-4"
                    {...register("password")}
                    // onChange={handleInputChange}
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
                    isInvalid={isInvalid}
                    className="max-w-sm mb-4"
                    {...register("confirmPassword")}
                    // onChange={handleInputChange}
                  />
                  {errors.confirmPassword && (
                    <span className="text-red-500">
                      {errors.confirmPassword.message}{" "}
                    </span>
                  )}

                  <div className="flex flex-col mb-2 mt-3">
                    <Link href="/auth/login" className="mb-3">
                      ¿Ya tienes una cuenta? Volver a iniciar sesión
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

            {isLoggedIn && (
              <div>
                <p>
                  ¡Registro exitoso! Serás redirigido a la página de inicio de
                  sesión.
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

// INICIO DE SESIÓN CON GOOGLE

// const { data: session } = useSession();
// console.log(session);

// useEffect(() => {
//   if (session?.user) {
//     // Si el usuario está autenticado, redirigirlo a la página principal;
//     signIn("credentials", {
//       email: session.user.email,
//       // password: session.user.password,
//       callbackUrl: "/",
//     })
//   }
// }, [session]);

// {session ? (
//   // Si el usuario está autenticado, muestra información del usuario y un botón de logout
//   <div>
//     {/* <p>Welcome, {session.user.name}!</p> */}
//     <button onClick={() => signOut()}>cerrar sesión</button>
//   </div>
// ) : (
//   // Si el usuario no está autenticado, muestra un botón para iniciar sesión con Google
//   <button onClick={() => signIn("google")}>
//     Inicia sesión con Google
//   </button>
// )}
