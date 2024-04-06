"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/interfaces/login.interface";
import { Title } from "@/components";
import Container from "@/components/shared/container";
import { Input, Link } from "@nextui-org/react";
import ButtonPrimary from "@/components/ui/button-primary";

type Login = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function LoginPage() {
  const [isInvalid, setIsInvalid] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<Login> = (data) => {
    // Aquí puedes manejar el envío del formulario
    console.log(data);
  };

  const handleInputChange = () => {
    // Puedes implementar la lógica de validación adicional si es necesario
    // Por ejemplo, para verificar si el formulario es válido
    // setIsInvalid(false); // Cambia esto según tu lógica de validación
  };

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

          <Title title="INICIO" titlePrimary="SESIÓN" />
          <div className="container">
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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

            {/* Separator */}
            <div className="flex items-center my-5">
              <div className="w-full border-t border-blue-300"></div>
              <div className="px-2 text-gray-100">O</div>
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
      </Container>
    </div>
  );
}
