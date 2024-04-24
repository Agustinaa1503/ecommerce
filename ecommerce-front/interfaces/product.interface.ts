import { z } from "zod";

const category = ["fiestas", "fluor", "luminoso", "infantiles", "reposteria", "decoracion", "globos", "otros"] as const;

export type Category = (typeof category)[number];

export const optionsCategory: {[key in Category]: string} = {
    fiestas: "Fiestas",
    fluor: "Fluor",
    luminoso: "Luminoso",
    infantiles: "Infantiles",
    reposteria: "Repostería",
    decoracion: "Decoración",
    globos: "Globos",
    otros: "Otros",
}


export const ProductSchema = z.object({
  _id: z.string().optional(),
  id: z
    .string()
    .refine((id) => !isNaN(parseFloat(id)), {
      message: "El id debe ser un número.",
    }),
  title: z
    .string()
    .min(1, { message: "El título debe tener al menos 3 caracteres." })
    .max(100, { message: "El título debe tener como máximo 100 caracteres." }),
  description: z
    .string()
    .min(1, { message: "La descripción debe tener al menos 10 caracteres." })
    .max(1000, {
      message: "La descripción debe tener como máximo 1000 caracteres.",
    })
    .optional(),
  price: z
    .string()
    .refine((price) => !isNaN(parseFloat(price)), {
      message: "El precio debe ser un número.",
    }),
  inStock: z
    .string()
    .refine((inStock) => !isNaN(parseFloat(inStock)), {
      message: "El precio debe ser un número.",
    }),

  gender: z.enum(category, {
      errorMap: () => ({ message: "Debe seleccionar una categoría" }),
  }).optional(),

  images: z.array(z.string()).optional(),

  slug: z.string().optional(),

  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export type Product = z.infer<typeof ProductSchema>;

export type CreateProduct = Omit<Product, "_id" | "createdAt" | "updatedAt">;

export type UpdateProduct = Partial<CreateProduct>;
