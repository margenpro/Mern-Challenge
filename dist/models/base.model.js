"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 4 },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dni: { type: String, required: true },
});
exports.default = mongoose_1.model("Base", exports.UserSchema);
//# sourceMappingURL=base.model.js.map