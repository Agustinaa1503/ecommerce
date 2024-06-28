import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Container from "@/components/shared/container";
import clsx from "clsx";
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: {
    id: string;
  };
}

export default function OrderPage( { params: { id } }: Props ) {
  return (
    <Container>
      <div className="flex justify-center items-center mb-72 px-10 sm:px-10">
        <div className="container">
          <Title title="Orden N°" titlePrimary={id} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Cart */}
            <div className="flex flex-col mt-5">
              <div className={
                clsx(
                    "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                    {
                        "bg-red-500": false,
                        "bg-green-700": true
                    }
                )
              }>
                <IoCardOutline size={30} />
                {/* <span className="mx-2">Pediente de Pago</span> */}
                <span className="mx-2">Pago realizado</span>

                </div>

              {/* Items */}
              {productsInCart.map((product) => (
                <div key={product.slug} className="flex mb-5">
                  <Image
                    src={`/products/${product.images[0]}`}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="mr-5 rounded"
                  />

                  <div>
                    <h1>{product.title}</h1>
                    <p>${product.price}</p>
                    <p className="font-bold text-gray-600">Subtotal: ${product.price * 1}</p>
                    {/* REVEER CUANDO HAYA BACK EL PRECIO SEGUN CANT SELECCIONADA */}
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout */}
            <div className=" bg-white text-gray-700 rounded-xl shadow-xl p-7">

                <h2 className="text-2xl mb-2">Dirección de entrega</h2>
                <div className="mb-10">
                    <p className="text-xl font-bold">Nombre</p>
                    <p>Apellido</p>
                    <p>Calle falsa 123</p>
                    <p>5000</p>
                    <p>Provincia</p>
                    <p>Ciudad</p>
                    <p>Teléfono</p>
                </div>

                {/* Separator */}
                <div className="w-full h-0.5 rounded bg-blue-200 mb-10"/>


              <h2 className="text-2xl mb-8">Resumen de compra</h2>
              <div className="grid grid-cols-2">
                <span>N° de productos</span>
                <span className="text-right">3 articulos</span>

                <span>Subtotal</span>
                <span className="text-right">$300</span>

                <span>Impuestos(15%)</span>
                <span className="text-right">$300</span>

                <span className="mt-5 text-2xl">Total: </span>
                <span className=" mt-5 text-2xl text-right">$300</span>
              </div>

              <div className="mt-5 mb-2 w-full">

              <div className={
                clsx(
                    "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                    {
                        "bg-red-500": false,
                        "bg-green-700": true
                    }
                )
              }>
                <IoCardOutline size={30} />
                {/* <span className="mx-2">Pediente de Pago</span> */}
                <span className="mx-2">Pago realizado</span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
