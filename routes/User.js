const env = require("dotenv");
env.config();
const saltRound = parseInt(process.env.SALTROUNDS);
const bcrypt = require("bcrypt");

const User = require("../models/user");
const express = require("express");
const userRouter = express.Router();

// Route to get All User from the DB
userRouter.get("/", async (req, res) => {
  try {
    const allUsers = await User.findAll();
    return res.status(201).json(allUsers);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Route to get a User by ID
userRouter.get("/:userID", async (req, res) => {
  try {
    const userID = req.params.userID;
    const user = await User.findByPk(userID);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Route to Update a User
userRouter.put("/:userID", async (req, res) => {
  try {
    const userID = req.params.userID;
    const user = await User.findByPk(userID);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { name, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, saltRound);
    const updatedUser = { name, password: hashedPassword };

    await user.update(updatedUser);

    return res
      .status(200)
      .json({ message: "User updated successfully", updatedDate: updatedUser });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Route to get All Userfrom the DB
userRouter.delete("/:userID", async (req, res) => {
  try {
    const userID = req.params.userID;
    const user = await User.findByPk(userID);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.destroy();
    return res.status(200).json({ message: "User Deleted", user });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = userRouter;
