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
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Container_1 = __importDefault(require("./Home/Container"));
const Container_2 = __importDefault(require("./Users/Container"));
const Login_1 = __importDefault(require("./Users/Login/Login"));
const Register_1 = __importDefault(require("./Users/Register/Register"));
const Container_3 = __importDefault(require("./Users/Edit/Container"));
const Container_4 = __importDefault(require("./NavBar/Container"));
const Container_5 = __importDefault(require("./Users/Childs/Container"));
const userContext_1 = __importDefault(require("../../context/userContext"));
const axios_1 = __importDefault(require("axios"));
require("bootstrap/dist/css/bootstrap.min.css");
function Main() {
    const [userData, setUserData] = react_1.useState({
        token: "",
        user: undefined,
    });
    react_1.useEffect(() => {
        const validateLogin = () => __awaiter(this, void 0, void 0, function* () {
            let token = sessionStorage.getItem("auth-token");
            if (token === null) {
                sessionStorage.setItem("auth-token", "");
                token = "";
            }
            const tokenRes = yield axios_1.default.post("http://localhost:5000/users/validateToken", null, { headers: { "x-auth-token": token } });
            if (tokenRes.data) {
                const userRes = yield axios_1.default.get("http://localhost:5000/users/", {
                    headers: { "x-auth-token": token },
                });
                setUserData({ token, user: userRes.data });
            }
        });
        validateLogin();
    }, []);
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(userContext_1.default.Provider, { value: { userData, setUserData } },
            react_1.default.createElement(Container_4.default, null),
            react_1.default.createElement(react_router_dom_1.Switch, null,
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Container_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/users", component: Container_2.default }),
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/users/login", component: Login_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/users/register", component: Register_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/users/edit", component: Container_3.default }),
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/users/childs", component: Container_5.default })))));
}
exports.default = Main;
//# sourceMappingURL=Main.js.map