"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../../styles.css");
const react_bootstrap_1 = require("react-bootstrap");
function Template(props) {
    const { submit = props.submit, userData = props.userData, setFirstName = props.setFirstName, setLastName = props.setLastName, setDni = props.setDni, } = props;
    return (react_1.default.createElement("div", { className: "align-items-center p-1 bg1 font" }, userData.user ? (react_1.default.createElement(react_bootstrap_1.Form, { onSubmit: submit },
        react_1.default.createElement(react_bootstrap_1.Form.Group, { className: "mb-3" },
            react_1.default.createElement(react_bootstrap_1.Form.Label, null, "First Name"),
            react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "text", placeholder: userData.user.firstName, onChange: (e) => setFirstName(e.target.value) })),
        react_1.default.createElement(react_bootstrap_1.Form.Group, { className: "mb-3" },
            react_1.default.createElement(react_bootstrap_1.Form.Label, null, "Last Name"),
            react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "text", placeholder: userData.user.lastName, onChange: (e) => setLastName(e.target.value) })),
        react_1.default.createElement(react_bootstrap_1.Form.Group, { className: "mb-3" },
            react_1.default.createElement(react_bootstrap_1.Form.Label, null, "DNI"),
            react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "text", placeholder: userData.user.dni, onChange: (e) => setDni(e.target.value) })),
        react_1.default.createElement("br", null),
        react_1.default.createElement(react_bootstrap_1.Form.Group, { className: "mb-3" },
            react_1.default.createElement(react_bootstrap_1.Button, { variant: "info", type: "submit" }, "Save")))) : (react_1.default.createElement("p", null, "Loading..."))));
}
exports.default = Template;
//# sourceMappingURL=Template.js.map