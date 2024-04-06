"use client";

import Container from "@/components/shared/container";
import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { Title } from "@/components";
import ButtonPrimary from "@/components/ui/button-primary";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterSchema } from "@/interfaces/register.interface";

type Register = {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function NewAccountPage() {
  const [isInvalid, setIsInvalid] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Register>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<Register> = (data) => {
    console.log(data);
  };

  // const handleInputChange = (event: {
  //   target: { value: React.SetStateAction<string> };
  // }) => {
  //   const { value } = event.target;
  //   if (value === "") {
  //     setIsInvalid(true);
  //   } else {
  //     setIsInvalid(false);
  //   }
  // };

  return (
    <div>
      <Container>
        <div className="flex flex-col justify-center items-center pt-10">
          <div className="flex justify-end w-full mb-4">
          <Link href="/">
            <ButtonPrimary
              type="button"
              text="Página principal"
              className="border-2 border-primary bg-transparent hover:bg-transparent w-full"
            />
          </Link>
          </div>
          
          <Title title="CREAR" titlePrimary="CUENTA" />
          <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col items-center">
                <Input
                  isRequired
                  type="text"
                  label="Nombre"
                  defaultValue=""
                  isInvalid={isInvalid}
                  className="max-w-sm mb-4"
                  // onChange={handleInputChange}
                />
                {errors.name && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}

                <Input
                  isRequired
                  type="text"
                  label="Apellido"
                  defaultValue=""
                  isInvalid={isInvalid}
                  className="max-w-sm mb-4"
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
          </div>
        </div>
      </Container>
    </div>
  );
}
