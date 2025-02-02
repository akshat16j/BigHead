import { z } from "zod";


export const FolderSchema = z.object({
    name: z.string().min(1, { message: "Name cannot be empty" }).max(20, { message: "Name must be less than 20 characters long" }),
})

export type FolderSchemaType = z.infer<typeof FolderSchema>
