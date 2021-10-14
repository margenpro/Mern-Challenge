"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Template_1 = __importDefault(require("./Template"));
const userContext_1 = __importDefault(require("../../../context/userContext"));
function Container() {
    return (react_1.default.createElement(userContext_1.default.Consumer, null, (userData) => react_1.default.createElement(Template_1.default, { userData: userData === null || userData === void 0 ? void 0 : userData.userData })));
}
exports.default = Container;
//# sourceMappingURL=Container.js.map