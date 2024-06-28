"use client";

import ButtonPrimary from "@/components/ui/buttons/button-primary";
import { Title } from "../../ui/title/title";
import { Input, Textarea } from "@nextui-org/react";
import { createProductRequest } from "@/app/api/products";
import { ProductSchema, optionsCategory } from "@/interfaces/product.interface";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

type Gender = keyof typeof optionsCategory;
type Product = {
  id: string;
  title: string;
  description?: string;
  price: string;
  inStock: string;
  images?: string[];
  gender?: Gender;
};

export const ProductForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Product>({
    resolver: zodResolver(ProductSchema),
  });

  register("images", {
    required: true,
    validate: { validateImages: (value) => value && value.length > 0 }
  })

  const optionsCategoryes = Object.entries(optionsCategory).map(
    ([key, value]) => (
      <option key={key} value={key}>
        {value}
      </option>
    )
  );

  const onSubmit: SubmitHandler<Product> = async (data) => {
    try {
      const formData = new FormData();
      formData.append('id', data.id);
      formData.append('title', data.title);
      formData.append('description', data.description || '');
      formData.append('price', data.price);
      formData.append('inStock', data.inStock);
      formData.append('gender', data.gender || '');

      data.images?.forEach((image) => {
        formData.append('images', image); // Agrega todas las imágenes al FormData
      });
  
      const res = await createProductRequest(formData);
      console.log("RESPUESTA DEL SERVIDOR", res);
    } catch (error: any) {
      console.log("Error al crear un Producto", error);
      if (error.message === "El producto ya existe") {
        toast.error("El producto ya existe");
      } else {
        toast.error("Error al crear el producto");
      }
    }
  };
  

  return (
    <div>
      <Title title="Agregar un" titlePrimary="Producto" />
      <div className="">
        <div className="flex flex-col ml-0 md:ml-40">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input
                isRequired
                type="number"
                id="id"
                label="Id producto"
                className="max-w-sm mb-4"
                defaultValue={""}
                {...register("id")}
              />
              {errors.id && (
                <span className="text-red-500">{errors.id.message}</span>
              )}
            </div>

            <div>
              <Input
                isRequired
                type="text"
                id="title"
                label="Nombre del producto"
                className="max-w-sm mb-4"
                defaultValue={""}
                {...register("title")}
              />
              {errors.title && (
                <span className="text-red-500">{errors.title.message}</span>
              )}
            </div>
            <div>
              <Textarea
                isRequired
                type="text"
                id="description"
                label="Descripción del producto"
                className="max-w-sm mb-4"
                defaultValue={""}
                {...register("description")}
              />
            </div>
            <div>
              <Input
                isRequired
                type="number"
                id="price"
                label="Precio producto"
                className="max-w-sm mb-4"
                defaultValue={""}
                {...register("price")}
              />
              {errors.price && (
                <span className="text-red-500">{errors.price.message}</span>
              )}
            </div>
            <div>
              <Input
                isRequired
                type="number"
                id="inStock"
                label="Stock producto"
                className="max-w-sm mb-4"
                defaultValue={""}
                {...register("inStock")}
              />
              {errors.inStock && (
                <span className="text-red-500">{errors.inStock.message}</span>
              )}
            </div>
            <div>
              <select
                id="gender"
                className="max-w-sm mb-4  borde hover:border-gray-500 px-4 py-2 rounded shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                defaultValue={""}
                {...register("gender")}
              >
                {optionsCategoryes}
              </select>
              {errors.gender && (
                <span className="text-red-500">{errors.gender.message}</span>
              )}
            </div>

            <div>
              <Input
                type="file"
                id="images"
                className="max-w-sm mb-4"
                defaultValue={""}
                {...register("images")}
                accept="image/*"
                multiple
              />
              {errors.images && (
                <span className="text-red-500">{errors.images.message}</span>
              )}
            </div>

            <div className="flex flex-col mb-2 mt-3">
              <ButtonPrimary
                className="hover:bg-transparent flex max-w-sm justify-center"
                type="submit"
                text="Agregar Producto"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
