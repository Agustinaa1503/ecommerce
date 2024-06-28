import { ColorsSelector, SizeSelector, QuantitySelector, ProductSlideShow } from "@/components";
import ButtonPrimary from "@/components/ui/buttons/button-primary";
import { titleFont } from "@/config/fonts";
import { Product } from "@/interfaces";
// import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import Container from "@/components/shared/container";

interface Props {
  params: {
    _id: string;
  };
}

export default function ProductPage({ params }: Props) {
  const { _id } = params;
  const product = { _id } as Product;

  if (!product) {
    notFound();
  }

  return (
    <Container>
    <div className="mt-10 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">

      {/* SlideShow */}
      <div className="col-span-1 md:col-span-2">
  {product.images && (
    <ProductSlideShow 
      title={product.title}
      images={product.images || []}
    />
  )}
</div>

      {/* DitailsProducts */}
      <div className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mg-5">$ {product.price}</p>

        {/* Reviews */}
        {/* <SizeSelector 
        selectedSize={product.sizes[0]}
        availableSizes={product.sizes}/>

        <ColorsSelector
          selectedColor={product.color[0]}
          availableColor={product.color} /> */}

        {/* Quantities */}
        <QuantitySelector 
        quantity={1}/>

        {/* Button */}
        <div className="flex justify-center mb-5 mt-5">
        <ButtonPrimary
          className="hover:bg-transparent w-full md:w-auto"
          type="button"
          text="Agregar al carrito"
        />
        </div>
        

        {/* Description */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
    </Container>
  );
}
