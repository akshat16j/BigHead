"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthSchema = void 0;
const zod_1 = require("zod");
exports.AuthSchema = zod_1.z.object({
    username: zod_1.z.string().min(3, { message: "Username must be at least 3 characters long" }).max(20, { message: "Username must be less than 20 characters long" }),
    password: zod_1.z.string().min(8, { message: "Password must be at least 8 characters long" }).max(20, { message: "Password must be less than 20 characters long" }),
});
