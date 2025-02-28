"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserSchema_1 = require("../schemas/UserSchema");
const db_1 = require("../db/db");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
const bcrypt_1 = __importDefault(require("bcrypt"));
const SALT_ROUNDS = 5;
const UserRouter = (0, express_1.Router)();
UserRouter.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { success, data, error } = UserSchema_1.AuthSchema.safeParse(req.body);
        if (!success) {
            res.status(400).json({ message: error.errors[0].message });
            return;
        }
        else {
            const existingUser = yield db_1.UserModel.findOne({ username: data.username });
            if (existingUser) {
                res.status(400).json({ message: 'User already exists' });
                return;
            }
            else {
                const hashedPassword = yield bcrypt_1.default.hash(data.password, SALT_ROUNDS);
                const user = yield db_1.UserModel.create(Object.assign(Object.assign({}, data), { password: hashedPassword }));
                res.status(200).json({ message: 'User created successfully', user });
            }
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
}));
UserRouter.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { success, data, error } = UserSchema_1.AuthSchema.safeParse(req.body);
        if (!success) {
            res.status(400).json({ message: error.errors[0].message });
            return;
        }
        else {
            const existingUser = yield db_1.UserModel.findOne({ username: data.username });
            if (existingUser) {
                const passwordMatch = yield bcrypt_1.default.compare(data.password, existingUser.password);
                if (passwordMatch) {
                    const token = jsonwebtoken_1.default.sign({ userId: existingUser._id }, config_1.JWT_SECRET);
                    res.status(200).json({ message: 'Login successful', user: existingUser, token });
                }
                else {
                    res.status(400).json({ message: 'Invalid password' });
                }
            }
            else {
                res.status(400).json({ message: 'User not found' });
            }
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
}));
exports.default = UserRouter;
