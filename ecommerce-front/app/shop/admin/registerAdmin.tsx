"use client";

import Container from "@/components/shared/container";
import React, { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import { Title } from "@/components";
import ButtonPrimary from "@/components/ui/button-primary";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterSchema, agentOptions } from "@/interfaces/register.interface";
import { createAdminRequest } from "@/app/api/admin";
// import { useSession, signIn, signOut } from "next-auth/react";

type Agent = keyof typeof agentOptions;
type RegisterAdmin = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  agent: Agent;
};

export default function NewAdminAgentPage() {
  const [isInvalid, setIsInvalid] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterAdmin>({
    resolver: zodResolver(RegisterSchema),
  });


  const onSubmit: SubmitHandler<RegisterAdmin> = async (data) => {
    console.log(data);
    try {
      const response = await createAdminRequest(data);
      console.log(response);
    } catch (error) {
      console.log("Error al crear el usuario", error);
      setIsInvalid(true);
    }
  };

  return (
    <div>
      <Container>
        <div className="flex flex-col justify-center items-center pt-10">

          <Title title="CREAR" titlePrimary="ADMINISTRADOR" />
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

                <div>
                  <select
                    id="agent"
                    className="max-w-sm mb-4  borde hover:border-gray-500 px-4 py-2 rounded shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    defaultValue={""}
                    {...register("agent")}
                  >
                    {Object.entries(agentOptions).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value}
                      </option>
                    ))}
                  </select>
                  {errors.agent && (
                    <span className="text-red-500">{errors.agent.message}</span>
                  )}
                </div>

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
