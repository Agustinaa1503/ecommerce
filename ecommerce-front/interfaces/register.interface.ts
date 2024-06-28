import {z} from "zod"

// Register USER / ADMIN

const agent = ["MARKETING", "FINANZAS", "LOGISTICA", "VENTAS", "TECNOLOGIA", "RRHH", "COMPRAS", "PRODUCCION"] as const;
export type Agent = (typeof agent)[number];

export const agentOptions: {[key in Agent]: string} = {
    MARKETING: 'MARKETING', // agente de marketing
    FINANZAS: 'FINANZAS', // agente de finanzas
    LOGISTICA: 'LOGÍSTICA', // agente de logística
    VENTAS:'VENTAS', // agente de ventas
    TECNOLOGIA:'TECNOLOGÍA', // agente de tecnologÍa
    RRHH:'RRHH', // agente de recursos humanos
    COMPRAS:'COMPRAS', // agente de compras
    PRODUCCION:'PRODUCCIÓN', // agente de producción
} as const;


export const RegisterSchema = z.object({

    agent: z.enum(agent, {
        errorMap: () => ({ message: "Debe seleccionar un rol según su oficina" }),
    }).optional(),

    name: z
    .string().min(3, { message: "El nombre debe tener al menos 3 caracteres" }).max(20).optional(),
    image: z.string().optional(),
    provider: z.enum(["google"]).optional(),
    phone: z
    .string().min(8, { message: "El telefono debe tener al menos 8 caracteres" }).max(20).optional(),
    email:z
    .string()
    .email({ message: "Ingrese un correo electrónico válido" }).optional(),
    password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }).optional(),
    confirmPassword: z
    .string()
    .min(6, { message: "Se recomienda que la contraseña tenga al menos 6 caracteres"}).optional(),
})
.refine((data)=> data.password === data.confirmPassword, {
    message: "Password no coinciden",
    path:["confirmPassword"],
})

export type RegisterInput = z.infer<typeof RegisterSchema>

export type CreateUser = Omit<RegisterInput, "_id" | "createdAt" | "updatedAt">

export type UpdateUser = Partial<CreateUser>;

export type CreateAdmin = Omit<RegisterInput, "_id" | "createdAt" | "updatedAt">

export type UpdateAdmin = Partial<CreateAdmin>;