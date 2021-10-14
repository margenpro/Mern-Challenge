"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../../styles.css");
const react_bootstrap_1 = require("react-bootstrap");
function Template({ userData, myChilds, submit, addChild, handleChange, showAdd, setShowAdd, showChilds, enableEdit, setEnableEdit, }) {
    const renderChild = (child) => {
        return (react_1.default.createElement(react_bootstrap_1.Row, { className: "align-items-center p-1" },
            react_1.default.createElement(react_bootstrap_1.Col, { sm: true, className: "my-1" },
                react_1.default.createElement(react_bootstrap_1.FloatingLabel, { className: "mb-3", label: "First Name" }, !enableEdit ? (react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "text", value: child.firstName, disabled: true })) : (react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "text", placeholder: child.firsName, onChange: (e) => (child.firstName = e.target.value) })))),
            react_1.default.createElement(react_bootstrap_1.Col, { sm: true, className: "my-1" },
                react_1.default.createElement(react_bootstrap_1.FloatingLabel, { className: "mb-3", label: "Last Name" }, !enableEdit ? (react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "text", value: child.lastName, disabled: true })) : (react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "text", placeholder: child.lastName, onChange: (e) => (child.lastName = e.target.value) })))),
            react_1.default.createElement(react_bootstrap_1.Col, { sm: true, className: "my-1" },
                react_1.default.createElement(react_bootstrap_1.FloatingLabel, { className: "mb-3", label: "DNI" }, !enableEdit ? (react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "text", value: child.dni, disabled: true })) : (react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "text", placeholder: child.dni, onChange: (e) => (child.dni = e.target.value) }))))));
    };
    const renderAddChild = () => {
        return (react_1.default.createElement(react_bootstrap_1.Row, { className: "align-items-center p-1 font" },
            react_1.default.createElement(react_bootstrap_1.Col, { md: true },
                react_1.default.createElement(react_bootstrap_1.Form.Group, { className: "mb-3" },
                    react_1.default.createElement(react_bootstrap_1.Form.Label, null, "Email"),
                    react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "text", name: "email", placeholder: "Email to login", onChange: (e) => handleChange(e), required: true }))),
            react_1.default.createElement(react_bootstrap_1.Col, { md: true },
                react_1.default.createElement(react_bootstrap_1.Form.Group, { className: "mb-3" },
                    react_1.default.createElement(react_bootstrap_1.Form.Label, null, "Password"),
                    react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "text", name: "password", placeholder: "Password to login", onChange: (e) => handleChange(e), required: true }))),
            react_1.default.createElement(react_bootstrap_1.Col, { md: true },
                react_1.default.createElement(react_bootstrap_1.Form.Group, { className: "mb-3" },
                    react_1.default.createElement(react_bootstrap_1.Form.Label, null, "First Name"),
                    react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "text", name: "firstName", placeholder: "Child's Name", onChange: (e) => handleChange(e), required: true }))),
            react_1.default.createElement(react_bootstrap_1.Col, { md: true },
                react_1.default.createElement(react_bootstrap_1.Form.Group, { className: "mb-3" },
                    react_1.default.createElement(react_bootstrap_1.Form.Label, null, "Last Name"),
                    react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "text", name: "lastName", placeholder: "Child's Last Name", onChange: (e) => handleChange(e), required: true }))),
            react_1.default.createElement(react_bootstrap_1.Col, { md: true },
                react_1.default.createElement(react_bootstrap_1.Form.Group, { className: "mb-3" },
                    react_1.default.createElement(react_bootstrap_1.Form.Label, null, "DNI"),
                    react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "text", name: "dni", placeholder: "Child's Dni", onChange: (e) => handleChange(e), required: true }))),
            react_1.default.createElement(react_bootstrap_1.Col, { md: true },
                react_1.default.createElement(react_bootstrap_1.Form.Group, { className: "p-1 m-3 mb-1" },
                    react_1.default.createElement(react_bootstrap_1.Button, { variant: "primary", onClick: addChild }, "Add")))));
    };
    return (react_1.default.createElement("div", { className: "bg1 align-items-center p-1" },
        react_1.default.createElement("div", { className: "p-1 m-3" },
            react_1.default.createElement(react_bootstrap_1.Button, { variant: "info", onClick: () => setShowAdd(!showAdd) }, "Add Child")),
        showAdd ? renderAddChild() : null,
        react_1.default.createElement("div", { className: "p-1 m-3 font" },
            showChilds ? (react_1.default.createElement(react_bootstrap_1.Button, { variant: "info", onClick: () => setEnableEdit(!enableEdit) }, "Edit Data")) : null,
            react_1.default.createElement("h6", { className: "m-2" }, " My childs data:")),
        react_1.default.createElement("div", { className: "p-1 m-3" }, showChilds ? (myChilds.map((c) => {
            return renderChild(c);
        })) : (react_1.default.createElement("h6", null, "You haven't loaded childs yet"))),
        enableEdit ? (react_1.default.createElement(react_bootstrap_1.Button, { variant: "success", onClick: submit }, "Save Changes")) : null));
}
exports.default = Template;
//# sourceMappingURL=Template.js.map