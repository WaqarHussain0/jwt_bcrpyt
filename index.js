const env = require("dotenv");
env.config();
const port = parseInt(process.env.PORTNUMBER) || 5000;
const express = require("express");
const cors = require("cors");
const app = express();
const { json } = require("express");
const { db } = require("./db/init");
const userSignUpRouter = require("./routes/SignUp.js");
const userLoginRouter = require("./routes/Login.js");

const VerifyAccessToken = require("./middleware/authMiddleware.js");
const userRouter = require("./routes/User.js");

app.use(cors());
app.use(json());

db.sequelize.sync({ alter: true });

app.use("/user/signup", userSignUpRouter);
app.use("/user/login", userLoginRouter);
app.use(VerifyAccessToken);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

module.exports = app;
