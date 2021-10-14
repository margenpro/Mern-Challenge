"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
const Main_1 = __importDefault(require("./components/Main/Main"));
react_dom_1.default.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(Main_1.default, null)), document.getElementById('root'));
reportWebVitals_1.default();
//# sourceMappingURL=index.js.map