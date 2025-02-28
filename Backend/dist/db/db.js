"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderModel = exports.ContentModel = exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config/config");
mongoose_1.default.connect(config_1.MONGO_URI);
const UserSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
const ContentSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    contentType: {
        type: String,
        required: true,
        enum: ['video', 'insta', 'music', 'links', 'document', 'text', "tweets"]
    },
    link: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    tags: {
        type: [String],
        default: []
    },
    folder: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Folder',
        default: null,
        required: false
    },
    links: {
        type: String,
        default: ''
    }
});
const FolderSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    parentFolder: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Folder',
        default: null,
        required: false
    }
});
const UserModel = mongoose_1.default.model('BigHeadUsers', UserSchema);
exports.UserModel = UserModel;
const ContentModel = mongoose_1.default.model('Content', ContentSchema);
exports.ContentModel = ContentModel;
const FolderModel = mongoose_1.default.model('Folder', FolderSchema);
exports.FolderModel = FolderModel;
