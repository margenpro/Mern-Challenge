"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Auth_1 = __importDefault(require("../Auth/Auth"));
const react_bootstrap_1 = require("react-bootstrap");
function Template() {
    return (react_1.default.createElement(react_bootstrap_1.Navbar, { bg: "warning" },
        react_1.default.createElement(react_bootstrap_1.Navbar.Brand, { href: "/" }, "MERN App "),
        react_1.default.createElement(react_bootstrap_1.Nav, { className: "container-fluid" },
            react_1.default.createElement(react_bootstrap_1.Nav.Item, { className: "ml-auto" },
                react_1.default.createElement(react_bootstrap_1.Nav.Link, { href: "/" }, "Home")),
            react_1.default.createElement(react_bootstrap_1.Nav.Item, { className: "ml-auto" },
                react_1.default.createElement(react_bootstrap_1.Nav.Link, { href: "/users" }, "Users")),
            react_1.default.createElement(Auth_1.default, null))));
}
exports.default = Template;
//# sourceMappingURL=Template.js.map