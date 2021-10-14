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
const Template_1 = __importDefault(require("./Template"));
const react_router_dom_1 = require("react-router-dom");
const axios_1 = __importDefault(require("axios"));
const userContext_1 = __importDefault(require("../../../../context/userContext"));
function Edit() {
    const [error, setError] = react_1.useState();
    const { userData, setUserData } = react_1.useContext(userContext_1.default);
    const location = react_router_dom_1.useLocation();
    const history = react_router_dom_1.useHistory();
    const _user = {
        firstName: "",
        lastName: "",
        dni: "",
        childsQ: 0,
        childs: [],
    };
    const [firstName, setFirstName] = react_1.useState(_user.firstName);
    const [lastName, setLastName] = react_1.useState(_user.lastName);
    const [dni, setDni] = react_1.useState(_user.dni);
    const [childsQ, setChildsQ] = react_1.useState(_user.childsQ);
    const [childs, setChilds] = react_1.useState(_user.childs);
    const submit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const updatedUser = {
            id: userData.user.id,
            firstName,
            lastName,
            dni,
            childsQ,
            childs,
        };
        if (!updatedUser) {
            alert("No changes were made");
        }
        else {
            try {
                const headers = { "x-auth-token": `${userData.token}` };
                const updateResponse = yield axios_1.default.post("http://localhost:5000/users/edit", updatedUser, { headers });
                setUserData({
                    user: updateResponse.data,
                });
                alert("Your changes were submited");
                const _userData = { user: updateResponse.data, token: userData.token };
                // history.push("/users", _userData);
            }
            catch (err) {
                alert("Error trying to save changes");
            }
        }
    });
    return (react_1.default.createElement(Template_1.default, { submit: submit, userData: userData, setFirstName: setFirstName, setLastName: setLastName, setDni: setDni }));
}
exports.default = Edit;
//# sourceMappingURL=Container.js.map