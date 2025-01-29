import { z } from 'zod'

export const AuthSchema = z.object({
  username: z.string().min(3, { message: "Username must be at least 3 characters long" }).max(20, { message: "Username must be less than 20 characters long" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }).max(20, { message: "Password must be less than 20 characters long" }),
})


export type AuthSchemaType = z.infer<typeof AuthSchema>
