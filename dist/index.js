"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./db/db"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
(0, db_1.default)(process.env.MONGO_URI)
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
})
    .catch((error) => {
    console.error("Error starting the server:", error);
});
// app.post("/api/v1/signup", (req, res) => {
// })
// app.post("/api/v1/signin", (req, res) => {
// })
// app.post("/api/v1/content", (req, res) => {
// })
// app.get("/api/v1/content", (req, res) => {
// })
// app.delete("/api/v1/content", (req, res) => {
// })
// app.post("/api/v1/brain/share", (req, res) => {
// })
// app.get("/api/v1/brain/:shareLink", (req, res) => {
// })
