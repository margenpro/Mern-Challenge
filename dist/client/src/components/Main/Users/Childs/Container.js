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
const axios_1 = __importDefault(require("axios"));
const userContext_1 = __importDefault(require("../../../../context/userContext"));
function MyChilds() {
    const { userData, setUserData } = react_1.useContext(userContext_1.default);
    const [myChilds, setMyChilds] = react_1.useState([]);
    const [email, setEmail] = react_1.useState();
    const [password, setPassword] = react_1.useState();
    const [firstName, setFirstName] = react_1.useState();
    const [lastName, setLastName] = react_1.useState();
    const [dni, setDni] = react_1.useState();
    const [showAdd, setShowAdd] = react_1.useState(false);
    const [showChilds, setShowChilds] = react_1.useState(false);
    const [enableEdit, setEnableEdit] = react_1.useState(false);
    react_1.useEffect(() => {
        if (userData.user) {
            getAllChilds();
        }
    }, [userData]);
    react_1.useEffect(() => {
        if (myChilds.length > 0) {
            setShowChilds(true);
        }
        else {
            setShowChilds(false);
        }
    }, [myChilds]);
    const getAllChilds = () => __awaiter(this, void 0, void 0, function* () {
        const params = {
            userId: userData.user.id,
            token: userData.token,
        };
        const childs = yield axios_1.default.get("http://localhost:5000/users/mychilds", { params });
        setMyChilds(childs.data.childs);
    });
    const submit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const headers = { "x-auth-token": `${userData.token}` };
        const updatedUser = {
            id: userData.user.id,
            firstName: userData.user.firstName,
            lastName: userData.user.lastName,
            dni: userData.user.dni,
            childsQ: myChilds.length,
            childs: myChilds,
        };
        if (!updatedUser) {
            alert("No changes were made");
        }
        else {
            try {
                yield axios_1.default.post("http://localhost:5000/users/edit", updatedUser, {
                    headers,
                });
                setUserData({
                    token: userData.token,
                    user: updatedUser,
                });
                alert("Your changes were submited");
            }
            catch (err) {
                alert("Error trying to save changes");
            }
        }
    });
    const handleChange = (e) => {
        switch (e.target.name) {
            case "email":
                setEmail(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            case "firstName":
                setFirstName(e.target.value);
                break;
            case "lastName":
                setLastName(e.target.value);
                break;
            case "dni":
                setDni(e.target.value);
                break;
            default:
                break;
        }
    };
    const registerChild = (child) => __awaiter(this, void 0, void 0, function* () {
        try {
            yield axios_1.default.post("http://localhost:5000/users/register", child);
            myChilds[myChilds.length] = child;
            alert("Successfully added children");
        }
        catch (err) {
            alert("Failed to add new child");
        }
    });
    const addChild = (e) => __awaiter(this, void 0, void 0, function* () {
        const newChild = {
            email,
            password,
            passwordCheck: password,
            firstName,
            lastName,
            dni,
            childsQ: -1,
        };
        yield registerChild(newChild);
        yield submit(e);
    });
    return (react_1.default.createElement(Template_1.default, { userData: userData, myChilds: myChilds, submit: submit, addChild: addChild, handleChange: handleChange, setShowAdd: setShowAdd, showAdd: showAdd, showChilds: showChilds, enableEdit: enableEdit, setEnableEdit: setEnableEdit }));
}
exports.default = MyChilds;
//# sourceMappingURL=Container.js.map