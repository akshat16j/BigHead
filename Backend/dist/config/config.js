"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = exports.PORT = exports.MONGO_URI = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.MONGO_URI = process.env.MONGO_URI || '';
exports.PORT = process.env.PORT || 3000;
exports.JWT_SECRET = process.env.JWT_SECRET || '';
if (!exports.MONGO_URI) {
    throw new Error('MONGO_URI is not defined in environment variables');
}
if (!exports.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in environment variables');
}
