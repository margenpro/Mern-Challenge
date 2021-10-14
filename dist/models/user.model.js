"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const base_model_1 = require("./base.model");
const Parent = base_model_1.UserSchema.add({
    childsQ: { type: Number, required: false },
    childs: { type: Array, required: false }
});
exports.default = mongoose_1.model("User", Parent);
//# sourceMappingURL=user.model.js.map