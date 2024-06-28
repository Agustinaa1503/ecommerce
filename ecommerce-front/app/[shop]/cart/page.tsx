import Link from "next/link";
import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Container from "@/components/shared/container";
import ButtonPrimary from "@/components/ui/buttons/button-primary";
import { redirect } from "next/navigation";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];
export default function CartPage() {

  // redirect('/shop/empty')

  return (
    <Container>
      <div className="flex justify-center items-center mb-72 px-10 sm:px-10">
        <div className="container">
          <Title title="Carrito de" titlePrimary="Compras" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Cart */}
            <div className="flex flex-col mt-5">
              <span className="text-xl">Agregar más productos</span>
              <Link href="/shop" className="underline mb-5 hover:text-blue-500">
                Volver a la tienda
              </Link>

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
                    <QuantitySelector quantity={1} />
                    <button className="underline mt-3 hover:text-blue-500">
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout */}
            <div className=" bg-white text-gray-700 rounded-xl shadow-xl p-7 h-fit">
              <h2 className="text-xl mb-8">Resumen de compra</h2>
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

              <div>
                <Link href={"/shop/checkout/address"}>
                <ButtonPrimary
                  className="hover:bg-transparent mt-10 w-full"
                  type="button"
                  text="Realizar compra"
                />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
