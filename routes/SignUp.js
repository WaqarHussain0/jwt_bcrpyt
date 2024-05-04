const env = require("dotenv");
env.config();
const saltRound = parseInt(process.env.SALTROUNDS);

const User = require("../models/user");
const express = require("express");
const bcrypt = require("bcrypt");
const { v4: uuid } = require("uuid");
const userSignUpRouter = express.Router();

// Route to register a new user in DB
userSignUpRouter.post("/", async (req, res) => {
  try {
    const userID = uuid();
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(409).json({ message: "This email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, saltRound);
    const newUser = { userID, name, email, password: hashedPassword };

    await User.create(newUser);
    return res
      .status(201)
      .json({ message: "Thanks for registeration", user: newUser });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = userSignUpRouter;
