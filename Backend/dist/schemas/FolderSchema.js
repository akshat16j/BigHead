"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderSchema = void 0;
const zod_1 = require("zod");
exports.FolderSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "Name cannot be empty" }).max(20, { message: "Name must be less than 20 characters long" }),
});
