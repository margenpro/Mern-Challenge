import { Router } from "express";
import bcrypt from "bcrypt";
import User from "../models/user.model"
import auth from "../middleware/auth";
const jwt = require("jsonwebtoken");

const router = Router();

router.post("/register", async (req, res) => {
  try {
    let { email, password, passwordCheck, firstName, lastName, dni } = req.body;
    if (
      !email ||
      !password ||
      !passwordCheck ||
      !firstName ||
      !lastName ||
      !dni
    ) {
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
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      email,
      password: passwordHash,
      firstName,
      lastName,
      dni,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Not all fields have been entered." });
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json({ msg: "No account with this email has been registered." });
    }
    const isMatch = await bcrypt.compare(password, user.password);
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
        childs: user.childs? user.childs: null
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// router.delete("/delete", auth, async (req, res) => {
//   try {
//     const deletedUser = await User.findByIdAndDelete(req.user);
//     res.json(deletedUser);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

router.post("/edit", auth, async (req: any, res) => {
  try {
    const { id, firstName, lastName, dni, childsQ, childs} = req.body;
    let user = await User.findById(
      { _id: id}
    );
      if (firstName){
        user.firstName = firstName
      }
      if (lastName){
        user.lastName = lastName
      }
      if (dni){
        user.dni = dni
      }
      if (childsQ){
        user.childsQ = childsQ
      }
      if (childs){
        user.childs = childs
      }
      user.isNew = false
      await user.save()
      res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/validateToken", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) {
      return res.json(false);
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
      return res.json(false);
    }
    const user = await User.findById(verified.id);
    if (!user) {
      return res.json(false);
    }
    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/mychilds", async (req: any, res) => {
  const token = req.query.token
  if(!token){
    return res.status(500).json({msg: "No token given"})
  } else {
    if (jwt.verify(token, process.env.JWT_SECRET)){
      try{
        let user = await User.findById({_id: req.query.userId});
        const limitedChilds = user.childs.slice(0,10)
          res.json({childs: limitedChilds})
        } catch (err){
          res.status(500).json({ error: err.message });
        }
    } 

  }
})

router.get("/", auth, async (req: any, res) => {
  try {
    const user = await User.findById(req.user);
    res.json({
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      dni: user.dni,
      childsQ: user.childs? user.childs.length: -1,
      childs: user.childs? user.childs: null
    });
  }catch (err){
    res.status(500).json({ error: err.message });
  }
});

export default router;
