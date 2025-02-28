"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentSchema = void 0;
const zod_1 = require("zod");
exports.ContentSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, { message: "Title cannot be empty" }).max(20, { message: "Title must be less than 20 characters long" }),
    contentType: zod_1.z.enum(['video', 'insta', 'music', 'links', 'document', 'text', "tweets"]),
    links: zod_1.z.string().optional().default(''),
    description: zod_1.z.string().optional().default(''),
    tags: zod_1.z.array(zod_1.z.string()).optional().default([]),
});
