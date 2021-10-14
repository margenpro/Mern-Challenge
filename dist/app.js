"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_1 = __importDefault(require("./routes/users"));
const mongoose_1 = __importDefault(require("mongoose"));
//const mongoose = require("mongoose");
require("dotenv").config();
const app = express_1.default();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use(cors_1.default());
app.get("/", (req, res) => {
    res.send("Welcome to server");
});
app.listen(port, () => {
    return console.log(`Server running on Port: ${port}`);
});
mongoose_1.default.connect(process.env.MONGO_STRING, {}, () => {
    console.log("MongoDB connection established");
});
mongoose_1.default.set("bufferCommands", false);
app.use("/users", users_1.default);
//# sourceMappingURL=app.js.map