"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../styles.css");
const react_router_dom_1 = require("react-router-dom");
function Template({ userData }) {
    return (react_1.default.createElement("div", { className: "bg1 font" }, userData.user ? (react_1.default.createElement("h1", null,
        "Welcome ",
        userData.user.firstName)) : (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h2", null, "Please Login to continue"),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/users/login" }, "Login")))));
}
exports.default = Template;
//# sourceMappingURL=Template.js.map