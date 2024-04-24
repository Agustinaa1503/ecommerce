import {z} from "zod"

// Login

export const LoginSchema = z.object({
    email:z
    .string()
    .email({ message: "Ingrese un correo electrónico válido" }),
    password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
})

export type LoginInput = z.infer<typeof LoginSchema>

export type CreateLogin = Omit<LoginInput, "_id" | "createdAt" | "updatedAt">

export type UpdateLogin = Partial<CreateLogin>;