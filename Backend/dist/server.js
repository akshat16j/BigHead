"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const config_1 = require("./config/config");
const mongoose_1 = __importDefault(require("mongoose"));
const ContentRoute_1 = __importDefault(require("./routes/ContentRoute"));
const cors_1 = __importDefault(require("cors"));
mongoose_1.default.connect(config_1.MONGO_URI);
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL
}));
app.get("/", (req, res) => {
    res.send("Backend is working!");
});
app.use('/api', UserRoutes_1.default);
app.use('/api', ContentRoute_1.default);
exports.default = app;
