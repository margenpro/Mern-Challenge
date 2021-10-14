"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const userContext_1 = __importDefault(require("../../../context/userContext"));
const react_bootstrap_1 = require("react-bootstrap");
function Auth() {
    const { userData, setUserData } = react_1.useContext(userContext_1.default);
    const history = react_router_dom_1.useHistory();
    const register = () => history.push("/users/register");
    const login = () => history.push("/users/login");
    const logout = () => {
        setUserData({
            token: "",
            user: undefined,
        });
        sessionStorage.setItem("auth-token", "");
        history.push("/");
    };
    const edit = () => history.push("/users/edit", userData);
    const childs = () => history.push("/users/childs", userData);
    return (react_1.default.createElement(react_bootstrap_1.Nav.Item, { className: "ms-auto" }, userData.user ? (react_1.default.createElement(react_bootstrap_1.NavDropdown, { title: `Hello ${userData.user.firstName}` },
        react_1.default.createElement(react_bootstrap_1.NavDropdown.Item, { href: "/users/edit" }, "Profile"),
        react_1.default.createElement(react_bootstrap_1.NavDropdown.Item, { href: "/users/childs" }, "My Childs"),
        react_1.default.createElement(react_bootstrap_1.NavDropdown.Divider, null),
        react_1.default.createElement(react_bootstrap_1.NavDropdown.Item, { onClick: logout }, "Logout"))) : (react_1.default.createElement(react_bootstrap_1.NavDropdown, { title: "My Account", menuVariant: "dark", className: "text-dark" },
        react_1.default.createElement(react_bootstrap_1.NavDropdown.Item, { href: "/users/login" }, "Login"),
        react_1.default.createElement(react_bootstrap_1.NavDropdown.Item, { href: "/users/register" }, "Sign Up")))));
}
exports.default = Auth;
//# sourceMappingURL=Auth.js.map