"use strict";
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
const express_1 = require("express");
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = __importDefault(require("../models/user.model"));
const auth_1 = __importDefault(require("../middleware/auth"));
const jwt = require("jsonwebtoken");
const router = express_1.Router();
router.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { email, password, passwordCheck, firstName, lastName, dni } = req.body;
        if (!email ||
            !password ||
            !passwordCheck ||
            !firstName ||
            !lastName ||
            !dni) {
            return res.status(400).json({ msg: "Fields incomplete" });
        }
        if (password.length < 4) {
            return res
                .status(400)
                .json({ msg: "4 characters needed at least for password" });
        }
        if (password !== passwordCheck) {
            return res.status(400).json({ msg: "Passwords did not match" });
        }
        const existingUser = yield user_model_1.default.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ msg: "User already exists" });
        }
        const salt = yield bcrypt_1.default.genSalt(10);
        const passwordHash = yield bcrypt_1.default.hash(password, salt);
        const newUser = new user_model_1.default({
            email,
            password: passwordHash,
            firstName,
            lastName,
            dni,
        });
        const savedUser = yield newUser.save();
        res.json(savedUser);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}));
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ msg: "Not all fields have been entered." });
        }
        const user = yield user_model_1.default.findOne({ email: email });
        if (!user) {
            return res
                .status(400)
                .json({ msg: "No account with this email has been registered." });
        }
        const isMatch = yield bcrypt_1.default.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials." });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({
            token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                dni: user.dni,
                childsQ: user.childsQ,
                childs: user.childs ? user.childs : null
            },
        });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}));
// router.delete("/delete", auth, async (req, res) => {
//   try {
//     const deletedUser = await User.findByIdAndDelete(req.user);
//     res.json(deletedUser);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
router.post("/edit", auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, firstName, lastName, dni, childsQ, childs } = req.body;
        let user = yield user_model_1.default.findById({ _id: id });
        if (firstName) {
            user.firstName = firstName;
        }
        if (lastName) {
            user.lastName = lastName;
        }
        if (dni) {
            user.dni = dni;
        }
        if (childsQ) {
            user.childsQ = childsQ;
        }
        if (childs) {
            user.childs = childs;
        }
        user.isNew = false;
        yield user.save();
        res.json(user);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}));
router.post("/validateToken", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.header("x-auth-token");
        if (!token) {
            return res.json(false);
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified) {
            return res.json(false);
        }
        const user = yield user_model_1.default.findById(verified.id);
        if (!user) {
            return res.json(false);
        }
        return res.json(true);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}));
router.get("/mychilds", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.query.token;
    if (!token) {
        return res.status(500).json({ msg: "No token given" });
    }
    else {
        if (jwt.verify(token, process.env.JWT_SECRET)) {
            try {
                let user = yield user_model_1.default.findById({ _id: req.query.userId });
                const limitedChilds = user.childs.slice(0, 10);
                res.json({ childs: limitedChilds });
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        }
    }
}));
router.get("/", auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.findById(req.user);
        res.json({
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            dni: user.dni,
            childsQ: user.childs ? user.childs.length : -1,
            childs: user.childs ? user.childs : null
        });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}));
exports.default = router;
//# sourceMappingURL=users.js.map