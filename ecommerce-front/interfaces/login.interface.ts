import {z} from "zod"

// Login

export const LoginSchema = z.object({
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

export type RegisterInput = z.infer<typeof LoginSchema>