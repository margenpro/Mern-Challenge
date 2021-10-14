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
require("../../styles.css");
const react_router_dom_1 = require("react-router-dom");
const axios_1 = __importDefault(require("axios"));
const userContext_1 = __importDefault(require("../../../../context/userContext"));
const ErrorMessage_1 = __importDefault(require("../../ErrorMessage/ErrorMessage"));
const react_bootstrap_1 = require("react-bootstrap");
function Login() {
    const [email, setEmail] = react_1.useState();
    const [password, setPassword] = react_1.useState();
    const [error, setError] = react_1.useState();
    const [checkFields, setCheckFields] = react_1.useState(false);
    const { setUserData } = react_1.useContext(userContext_1.default);
    const history = react_router_dom_1.useHistory();
    react_1.useEffect(() => {
        if (email && password) {
            setCheckFields(true);
        }
        else {
            setCheckFields(false);
        }
    }, [email, password]);
    const submit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        try {
            const loginUser = { email, password };
            const loginResponse = yield axios_1.default.post("http://localhost:5000/users/login", loginUser);
            setUserData(loginResponse.data);
            sessionStorage.setItem("auth-token", loginResponse.data.token);
            history.push("/users", loginResponse.data);
        }
        catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
    });
    return (react_1.default.createElement("div", { className: "bg1 font" },
        react_1.default.createElement("h2", null, "Login"),
        error && (react_1.default.createElement(ErrorMessage_1.default, { message: error, clearError: () => setError(undefined) })),
        react_1.default.createElement(react_bootstrap_1.Form, { onSubmit: submit },
            react_1.default.createElement(react_bootstrap_1.Form.Label, null, "Email "),
            react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "email", id: "email", onChange: (e) => setEmail(e.target.value) }),
            react_1.default.createElement(react_bootstrap_1.Form.Label, null, "Password "),
            react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "password", id: "password", onChange: (e) => setPassword(e.target.value) }),
            react_1.default.createElement(react_bootstrap_1.Button, { variant: "primary", type: "submit", disabled: !checkFields }, "Login"))));
}
exports.default = Login;
//# sourceMappingURL=Login.js.map