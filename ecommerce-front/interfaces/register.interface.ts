import {z} from "zod"

// Register

export const RegisterSchema = z.object({
    name: z
    .string().min(3, { message: "El nombre debe tener al menos 3 caracteres" }).max(20),
    lastName: z
    .string().min(3, { message: "El apellido debe tener al menos 3 caracteres" }).max(20),
    phone: z
    .string().min(8, { message: "El telefono debe tener al menos 8 caracteres" }).max(20),
    email:z
    .string()
    .email({ message: "Ingrese un correo electrónico válido" }),
    password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
    confirmPassword: z
    .string()
    .min(6, { message: "Se recomienda que la contraseña tenga al menos 6 caracteres"}),
})
.refine((data)=> data.password === data.confirmPassword, {
    message: "Password no coinciden",
    path:["confirmPassword"],
})

export type RegisterInput = z.infer<typeof RegisterSchema>