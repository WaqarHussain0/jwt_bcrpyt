const env = require("dotenv");
env.config();
const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const LoginRouter = express.Router();
const jwt = require("jsonwebtoken");

LoginRouter.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email, password)) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const accessToken = jwt.sign(
        {
          userID: user.userID,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "10h",
        }
      );

      return res.status(200).json({
        message: "Welcome Back",
        token: accessToken,
        user: user,
      });
    } else {
      return res.status(401).json({ message: "Incorrect email or password" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = LoginRouter;
