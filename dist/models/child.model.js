"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const base_model_1 = require("./base.model");
const Child = base_model_1.UserSchema;
exports.default = mongoose_1.model("Child", Child);
//# sourceMappingURL=child.model.js.map