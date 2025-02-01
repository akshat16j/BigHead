import { z } from "zod";


export const ContentSchema = z.object({
    title: z.string().min(1, { message: "Title cannot be empty" }).max(20, { message: "Title must be less than 20 characters long" }),
    contentType: z.enum(['video', 'insta', 'music', 'links', 'document', 'text',"tweets"]),
    link: z.string().optional().default(''),
    description: z.string().optional().default(''),
    tags: z.array(z.string()).optional().default([]),
    folder: z.string().optional().default('')
})

export type ContentSchemaType = z.infer<typeof ContentSchema>
