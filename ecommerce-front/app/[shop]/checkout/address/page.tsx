"use client";

import Container from "@/components/shared/container";
import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { Title } from "@/components";
import ButtonPrimary from "@/components/ui/buttons/button-primary";
import Link from "next/link";

export default function AddressPage() {
  const [isInvalid, setIsInvalid] = useState(false);

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    const { value } = event.target;
    if (value === "") {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };

  return (
    <div>
    <Container>
      <div className="flex justify-center items-center mb-72 px-10 sm:px-10">
        <div className="container">
          <Title title="Dirección de" titlePrimary="Entrega" />

          <div className="grid grid-cols-1 mx-auto md:mx-36 sm:grid-cols-2 gap-5">
            <Input
              isRequired
              type="text"
              label="Nombre"
              defaultValue=""
              isInvalid={isInvalid}
              className="max-w-xs"
              onChange={handleInputChange}
            />

            <Input
              isRequired
              type="text"
              label="Apellido"
              defaultValue=""
              isInvalid={isInvalid}
              className="max-w-xs"
              onChange={handleInputChange}
            />

            <Input
              isRequired
              type="email"
              label="Email"
              defaultValue=""
              isInvalid={isInvalid}
              className="max-w-xs"
              onChange={handleInputChange}
            />

            <Input
              isRequired
              type="address"
              label="Dirección"
              defaultValue=""
              isInvalid={isInvalid}
              className="max-w-xs"
              onChange={handleInputChange}
            />

            <Input
              isRequired
              type="number"
              label="Codigo Postal"
              defaultValue=""
              isInvalid={isInvalid}
              className="max-w-xs"
              onChange={handleInputChange}
            />

            <Input
              isRequired
              type="select"
              label="Provincia"
              defaultValue=""
              isInvalid={isInvalid}
              className="max-w-xs"/>

            <Input
              isRequired
              type="text"
              label="Ciudad"
              defaultValue=""
              isInvalid={isInvalid}
              className="max-w-xs"
              onChange={handleInputChange}
            />

            <Input
              isRequired
              type="number"
              label="Teléfono"
              defaultValue=""
              isInvalid={isInvalid}
              className="max-w-xs"
              onChange={handleInputChange}
            />

            <div className="flex flex-col mb-2 sm:tm-10">
              <Link href="/shop/checkout/">
                <ButtonPrimary
                  className="hover:bg-transparent flex w-full sm:w-1/2 justify-center"
                  type="submit"
                  text="Enviar dirección"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
  )
}