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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./db/db"));
const user_model_1 = require("./models/user.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
const JWT_PASSWORD = process.env.SECRET_KEY;
(0, db_1.default)(process.env.MONGO_URI)
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
})
    .catch((error) => {
    console.error("Error starting the server:", error);
});
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    try {
        const user = yield user_model_1.User.create({ username, email, password });
        console.log(user);
        res.json({
            message: "User signed up",
        });
    }
    catch (e) {
        res.status(411).json({
            message: "User already exists",
        });
    }
}));
app.post("/api/v1/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const password = req.body.password;
    const existingUser = yield user_model_1.User.findOne({
        email,
        password
    });
    if (existingUser) {
        const token = jsonwebtoken_1.default.sign({ id: existingUser._id }, JWT_PASSWORD);
        res.json({
            token
        });
    }
    else {
        res.status(403).json({
            message: "Incorrrect credentials"
        });
    }
}));
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
