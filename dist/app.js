"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const ElectionRoutes_1 = __importDefault(require("./router/ElectionRoutes"));
const appConf = (app) => {
    app.use(express_1.default.json()).use((0, cors_1.default)());
    // routes
    app.use("/elect", ElectionRoutes_1.default);
    app.get("/", (req, res) => {
        return res.status(200).json({
            message: "default get them wella"
        });
    });
};
exports.default = appConf;
