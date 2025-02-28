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
const db_1 = require("../db/db");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const ContentSchema_1 = require("../schemas/ContentSchema");
const FolderSchema_1 = require("../schemas/FolderSchema");
const ContentRouter = (0, express_1.Router)();
ContentRouter.post('/add-content', authMiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { success, data, error } = ContentSchema_1.ContentSchema.safeParse(req.body);
        if (!success) {
            res.status(400).json({ errors: error.errors });
            return;
        }
        const content = yield db_1.ContentModel.create(Object.assign(Object.assign({}, data), { userId: req.body.userId, folder: req.query.folder || null }));
        res.status(200).json({ message: 'Content created successfully', content });
    }
    catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ message: 'Internal server error', error: error });
    }
}));
ContentRouter.get('/content', authMiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { folder } = req.query;
        const content = yield db_1.ContentModel.find({
            userId: req.body.userId,
            folder: folder ? folder : null
        });
        res.status(200).json({ content });
    }
    catch (err) {
        res.status(500).json({ message: 'Internal server error', error: err });
    }
}));
ContentRouter.post('/add-folder', authMiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { folder } = req.query;
        const { parentFolder } = req.body;
        const { success, data, error } = FolderSchema_1.FolderSchema.safeParse({ name: folder, parentFolder: parentFolder });
        if (!success) {
            res.status(400).json({ errors: error.errors });
            return;
        }
        const newFolder = yield db_1.FolderModel.create({
            name: folder,
            userId: req.body.userId,
            parentFolder: parentFolder || null
        });
        res.status(200).json({
            message: 'Folder added successfully',
            folder: newFolder
        });
    }
    catch (err) {
        console.error('Error creating folder:', err);
        res.status(500).json({
            message: 'Internal server error',
            error: err
        });
    }
}));
ContentRouter.get('/folders', authMiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { parentFolder } = req.query;
        const folders = yield db_1.FolderModel.find({
            userId: req.body.userId,
            parentFolder: parentFolder ? parentFolder : null
        });
        res.status(200).json({ folders });
    }
    catch (err) {
        res.status(500).json({ message: 'Internal server error', error: err });
    }
}));
ContentRouter.delete('/delete-folder', authMiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { folderId } = req.query;
        const folders = yield db_1.FolderModel.deleteOne({ _id: folderId, userId: req.body.userId });
        res.status(200).json({ message: 'Folder deleted successfully', folders });
    }
    catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
}));
ContentRouter.delete('/delete-content', authMiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        const content = yield db_1.ContentModel.deleteOne({ _id: id, userId: req.body.userId });
        res.status(200).json({ message: 'Content deleted successfully', content });
    }
    catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
}));
exports.default = ContentRouter;
